import { IonButton, IonButtons, IonHeader, IonMenuButton, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { IconType } from 'react-icons';

type ModalHeaderProps = {
    icon?: boolean;
    cartIcon?: IconType;
    SubHeading?: string;
    Heading?: string;
};
const ModalHeader = ({ icon, SubHeading, Heading, cartIcon }: ModalHeaderProps) => {
    return (
        <IonHeader>
            <IonToolbar className='cartHeader'>
                <IonButtons slot="start">
                    {/* <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton> */}
                    {
                        icon && (
                            <IonMenuButton className='text-white'></IonMenuButton>
                        )
                    }
                </IonButtons>
                <IonTitle className='text-white w-fit'>{Heading}</IonTitle>
                {cartIcon && (
                    <IonRow className="" id="open-modal">
                        <IonText className="text-2xl text-white relative after:absolute after:content-['3'] after:size-4 after:bg-orange-600 after:rounded-full after:text-white after:text-xs after:grid after:place-items-center after:-top-2 after:-right-2">
                            {cartIcon({ size: '1em' })}
                        </IonText>
                    </IonRow>
                )}
            </IonToolbar>
        </IonHeader>
    )
}

export default ModalHeader
