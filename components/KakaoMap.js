import axios from 'axios';
import React, { useEffect } from 'react';

const KakaoMap = ({ isbn }) => {
  // 인포 윈도우
  const createInfowindow = async (lib, map, marker) => {
    await axios
      .get(`http://15.165.57.229:8080/book/loan/${lib.libCode}/${isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res, err) => {
        if (!err && res.data.result !== undefined) {
          let infowindow = '';
          if (
            res.data.result.hasBook === 'N' ||
            res.data.result.loanAvailable === 'N'
          ) {
            infowindow = new window.kakao.maps.InfoWindow({
              content: `<div class="infowindow">
              <h4 id="name">${lib.libName}</h4>
              대출 불가
              <a href=${lib.homepage}>홈페이지</a>
            </div>`,
              removable: true,
            });
          } else {
            infowindow = new window.kakao.maps.InfoWindow({
              content: `<div class="infowindow">
              <h4 id="name">${lib.libName}</h4>
              대출 가능
              <a href=${lib.homepage}>홈페이지</a>
            </div>`,
              removable: true,
            });
          }
          window.kakao.maps.event.addListener(marker, 'click', () => {
            infowindow.open(map, marker);
          });
        }
      });
  };

  // 범위 내 도서관 정보 가져오기
  const getLibraryMark = async (bounds, map) => {
    await axios
      .post(`http://${process.env.BACK_END_URL}/library/around`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        bound: bounds,
      })
      .then((res) => {
        const libraryListInfo = res.data;
        // 마커 생성
        libraryListInfo.map((lib, index) => {
          const latlng = new window.kakao.maps.LatLng(
            lib.latitude,
            lib.longitude
          );
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: latlng,
            title: lib.libName,
          });

          createInfowindow(lib, map, marker);

          const libraryOverlay = new kakao.maps.CustomOverlay({
            position: latlng,
            content: `<div class="infowindow">
            <h4 id="name">${lib.libName}</h4>
            </div>`,
          });
        });
      });
  };

  useEffect(() => {
    const { kakao } = window;
    // 지도 띄우기
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);

    // 중심좌표 설정
    const moveLatLon = new kakao.maps.LatLng(36.629073, 127.456261);
    map.setCenter(moveLatLon);
    // 지도 이동 이벤트
    kakao.maps.event.addListener(map, 'dragend', () => {
      getLibraryMark(map.getBounds().toString(), map);
    });

    // 지도 확대/축소 끄기
    map.setZoomable(false);

    getLibraryMark(map.getBounds().toString(), map);

    // 위치 정보를 불러와서 지도이동
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     const lat = position.coords.latitude;
    //     const lon = position.coords.longitude;

    //     const moveLatLon = new kakao.maps.LatLng(lat, lon);
    //     map.setCenter(moveLatLon);
    //   });
    // } else {
    //   console.log('위치정보를 불러올 수 없습니다.');
    // }
  }, [isbn]);
  return (
    <>
      <div id="libraryLayout">
        <div id="map" style={{ width: '95%', height: '500px' }}>
          카카오맵
        </div>
      </div>
    </>
  );
};

export default KakaoMap;
