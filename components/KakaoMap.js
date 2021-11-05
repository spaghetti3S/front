import React, { useEffect } from 'react';

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
    const moveLatLon = new kakao.maps.LatLng(36.629073, 127.456261);
    map.setCenter(moveLatLon);

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
    <div id="map" style={{ width: '60%', height: '500px' }}>
      카카오맵
    </div>
  );
};

export default KakaoMap;
