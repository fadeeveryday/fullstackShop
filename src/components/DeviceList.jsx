import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import { useNavigate } from "react-router-dom";

const DeviceList = observer(() => {
  const {device} = useContext(Context)
  const navigate = useNavigate()
  console.log(navigate)

  return (
    <Row className="d-flex">
      {device.devices.map((device) => 
        <DeviceItem key={device.id} device={device}/>
      )}
    </Row>
  )
});

export default DeviceList
