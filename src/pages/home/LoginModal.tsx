import { useState } from 'react'
import { IoMenu } from 'react-icons/io5';

import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonInput, IonItem, IonModal, IonPage, IonSearchbar } from '@ionic/react'

import Header from '../../components/header'

import './Home.css'
import NoteModal from './NoteModal';

const LoginModal = ({ showLogin = false }) => {

    const [searchTerm,] = useState("");
    const [showNoteModal, setShowNoteModal] = useState(false);

    const onNoteModalClick = () => {
        setShowNoteModal(true);
    };

    return (
        <>
            {
                showLogin && (
                    <IonPage>
                        <Header
                            Heading='Login'
                        />
                        <IonContent className="Modalbg-color ion-padding">
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
                                    <IonButton onClick={onNoteModalClick} className='orangebtn mx-auto flex !mt-5'>Next</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonContent>
                        <NoteModal showNoteModal={showNoteModal} setShowNoteModal={setShowNoteModal} />
                    </IonPage>
                )
            }
        </>
    )
}

export default LoginModal
