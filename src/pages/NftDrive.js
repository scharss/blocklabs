import {InputNameDescrip, ChooseFile, TesterFactor, StoreFile, ContractManager, ConnectMetamask, ReadContract, WriteContract} from "../components/NftDriveComponent"

//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
import React, { useState } from "react";
//import {TesterComponent, TesterFactor, StoreFile} from "../components/TesterComponent"

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap


export function NftDrive(){
	return(<>
	
	<Container>
      <Row>
	  
        < Col sm={12} md={12} lg={12} xl={12}>

	<ContractManager />
	<ConnectMetamask />
	<InputNameDescrip />
	
	<ChooseFile />
	<StoreFile />
	<WriteContract />
	<ReadContract />
      </Col>
      </Row>
</Container>
	
	
	</>)
}