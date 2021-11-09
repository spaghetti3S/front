import axios from 'axios';
import React, { useEffect, useState } from 'react';

import LibraryInfoLayout from './LibraryInfoLayout';

const { kakao } = window;

const KakaoMap = ({ isbn }) => {
  const [libraryList, setLibraryList] = useState([]);

  // 인포윈도우를 표시하는 클로저를 만드는 함수
  const makeOverListener = (map, marker, infowindow) => {
    return function () {
      infowindow.open(map, marker);
    };
  };

  // 인포윈도우를 닫는 클로저를 만드는 함수
  const makeOutListener = (infowindow) => {
    return () => {
      infowindow.close();
    };
  };

  // 범위 내 도서관 정보 가져오기
  const getLibraryMark = async (bounds, map, myPosition) => {
    await axios
      .post(`http://localhost:4000/library/around`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        bound: bounds,
      })
      .then((res) => {
        const libraryListInfo = res.data;
        // 마커 생성
        libraryListInfo.map((lib, index) => {
          if (libraryListInfo[index] && !libraryListInfo[index].distance)
            libraryListInfo[index].distance =
              ((myPosition[0] - lib.latitude) ** 2 +
                (myPosition[1] - lib.longitude) ** 2) **
              0.5;
          const latlng = new kakao.maps.LatLng(lib.latitude, lib.longitude);
          const marker = new kakao.maps.Marker({
            map: map,
            position: latlng,
            title: lib.libName,
          });
          const infowindow = new kakao.maps.InfoWindow({
            content: lib.libName,
          });
          kakao.maps.event.addListener(
            marker,
            'mouseover',
            makeOverListener(map, marker, infowindow)
          );
          kakao.maps.event.addListener(
            marker,
            'mouseout',
            makeOutListener(infowindow)
          );
        });
        libraryListInfo.sort((a, b) => {
          return a.distance - b.distance;
        });
        setLibraryList(libraryListInfo);
      });
  };

  useEffect(() => {
    const myPosition = [37.365264512305174, 127.10676860117488];
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
      getLibraryMark(map.getBounds().toString(), map, myPosition);
    });

    // 지도 확대/축소 끄기
    map.setZoomable(false);
    // 지도 확대/축소 이벤트
    // kakao.maps.event.addListener(map, 'zoom_changed', () => {
    //   getLibraryMark(map.getBounds().toString(), map, myPosition);
    // });

    getLibraryMark(map.getBounds().toString(), map, myPosition);

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
  }, []);
  return (
    <div id="libraryLayout">
      <div id="map" style={{ width: '60%', height: '500px' }}>
        카카오맵
      </div>
      <LibraryInfoLayout library={libraryList} isbn={isbn} />
    </div>
  );
};

export default KakaoMap;
