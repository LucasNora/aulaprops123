import React from "react";
import Button from 'react-bootstrap/Button';
import ModalComponent from "./modal-component";


interface Props {
    novoModal: boolean;
    handleOpenCloseModal: any;
}

export default function ButtonComponent(props: Props) {
    return (
        <>
        <Button onClick={props.handleOpenCloseModal} variant="warning">Warning</Button>
        
        <ModalComponent novoModal={props.novoModal} handleOpenCloseModal={props.handleOpenCloseModal} />
        </>
    );
}