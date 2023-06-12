import React from "react";
import './styles.css'
import Image from 'next/image'
import LoadingComponent from '@/assets/LoadingComponent.svg'

const Loading = () => {
  return (
    <div className="loadingPage">
      <Image className="logo" src={LoadingComponent} style={{ height: '350px', }} alt="loading" />
    </div>
  );
};

export default Loading;
