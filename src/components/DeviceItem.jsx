import React from "react"
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.svg"
import { DEVICE_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const DeviceItem = ({device}) => {
  const router = useNavigate()

  return (
    <Col md={3} className="mt-3" onClick={() => router(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={"ligth"}>
        <Image width={150} height={150} src={device.img}/>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung</div>
          <div className="d-flex align-items-center">
            <div style={{marginRight: "5px"}}>{device.rating}</div>
            <Image src={star} style={{width: 15, height: 15}}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
};

export default DeviceItem
