import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import React, { useRef, useState } from 'react'
import { IoMenu } from 'react-icons/io5';

import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonInput, IonItem, IonModal, IonSearchbar } from '@ionic/react'

import Header from '../../components/header'
// If Header is exported as React.forwardRef, ensure the export in '../../components/header' is:
// export default React.forwardRef(Header);
// Or, if it's a named export, import it as:
// import { Header } from '../../components/header';

import './Home.css'

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {

    const proceedModal = useRef<HTMLIonModalElement>(null);
    function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
        if (event.detail.role === 'confirm') {
            setMessage(`Hello, ${event.detail.data}!`);
        }
    }
    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );
    const [searchTerm,] = useState("");

    return (
        <IonModal
            isOpen={isOpen}
            ref={proceedModal}
            onWillDismiss={(event) => onWillDismiss(event)}
            className='Modalbg-color'
            style={{ zIndex: 1000 }}
        >
            <Header
                icon={IoMenu}
                Heading='Login'
            />
            <IonContent className="Modalbg-color ion-padding">
                <IonSearchbar
                    style={{ "--box-shadow": "transparent", borderRadius: '22px !important' }}
                    className="h-10 !rounded-md !p-0"
                    placeholder="Search.."
                    value={searchTerm}
                    debounce={300}
                />
                <IonCol>
                    <IonCard className='rounded-xl w-full mx-auto !mt-0'>
                        <IonCardSubtitle className='text-black text-center mx-auto pb-4 border-b border-[#dee2e6] ion-padding'>We will send an SMS with a confirmation code to this number</IonCardSubtitle>
                        <IonCardContent className='space-y-2'>
                            <IonItem className='item-native'>
                                <IonInput
                                    label="Phone Number *"
                                    type='tel'
                                    labelPlacement="stacked"
                                    clearOnEdit={true}
                                    placeholder="Enter Phone Number"
                                    className='text-lg custom-input'
                                ></IonInput>
                            </IonItem>
                            <IonItem className='item-native'>
                                <IonInput
                                    label="Use your referral code here"
                                    labelPlacement="stacked"
                                    clearOnEdit={true}
                                    placeholder="Enter Code"
                                    className='text-lg custom-input px-0 !w-full'
                                ></IonInput>
                            </IonItem>
                            <IonButton className='orangebtn mx-auto flex !mt-5'>Next</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonContent>
        </IonModal>
    )
}

export default LoginModal
