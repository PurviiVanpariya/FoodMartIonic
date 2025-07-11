import { IonContent, IonPage, IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonImg, IonRow, IonCol, useIonRouter } from '@ionic/react'
import Header from '../../components/header'
import Button from '../../components/common/Button'
import { useState } from 'react'
import CongratsModal from './CongratsModal'

type NoteModalProps = {
    showNoteModal?: boolean;
    setShowNoteModal?: any;
    source?: 'profile' | 'checkout';
}

type PaymentModalProps = {
    showPayment?: boolean;
    setShowPayment?: any;
}

export const PaymentModal = ({ showPayment, setShowPayment }: PaymentModalProps) => {

    const [showCongrats, setShowCongrats] = useState(false);

    const showCongratsModal = () => [
        setShowCongrats(true)
    ]

   

    return (
        <>
            {showPayment && (
                <IonPage className="bg-[#F4F5F8] bg-color">
                    <Header
                        showBackButton
                        onBackClick={() => { setShowPayment(false) }}
                        Heading="Payment" />
                    <IonContent className="ion-padding Modalbg-color">
                        <IonImg src="https://askdemo-c24d7.web.app/assets/payment_methods.png"></IonImg>
                        <IonRow className="bg-white rounded-xl shadow-md pl-0 p-4 mt-4 space-y-4 w-full">
                            <IonItem className="w-full">
                                <IonInput
                                    label="Card Number"
                                    className='!text-[15px]'
                                    labelPlacement="stacked"
                                    type="text"
                                    placeholder="Enter Card Number"
                                />
                            </IonItem>
                            <IonItem className="w-full">
                                <IonInput
                                    label="mm/yy (Valid Thru)"
                                    className='!text-[15px]'
                                    labelPlacement="stacked"
                                    type="text"
                                    placeholder="Enter mm/yy"
                                />
                            </IonItem>
                            <IonItem className="w-full">
                                <IonInput
                                    label="CVV"
                                    className='!text-[15px]'
                                    labelPlacement="stacked"
                                    type="text"
                                    placeholder="Enter CVV"
                                />
                            </IonItem>
                            <IonItem className="w-full">
                                <IonInput
                                    label="Nickname (Optional)"
                                    className='!text-[15px]'
                                    labelPlacement="stacked"
                                    type="text"
                                    placeholder="Enter Nickname"
                                />
                            </IonItem>
                            <Button label="SAVE" className="!w-full mt-4 ml-4" onClick={showCongratsModal}></Button>
                        </IonRow>
                    </IonContent>
                    <CongratsModal showCongrats={showCongrats} />
                </IonPage>
            )}
        </>
    )
}

const NoteModal = ({ showNoteModal = false, setShowNoteModal,source }: NoteModalProps) => {

    const [showPayment, setShowPayment] = useState(false);

    const showPaymentModal = () => [
        setShowPayment(true)
    ]

     const handleSaveClick = () => {
        if (source === 'profile') {
            setShowNoteModal?.(false);
        } else {
            setShowPayment(true);
        }
    };

    return (
        <>
            {
                showNoteModal && (
                    <IonPage className="bg-[#F4F5F8] bg-color">
                        <Header
                            showBackButton
                            onBackClick={() => { setShowNoteModal(false) }}
                            Heading="Delivery Address"
                        />
                        <IonContent className="ion-padding Modalbg-color">
                            <IonRow className="bg-white rounded-xl shadow-md pt-2 pb-3 pr-3 space-y-4 w-full">
                                <IonItem className="w-full">
                                    <IonInput
                                        className='!text-[15px]'
                                        label="Name"
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Name"
                                    />
                                </IonItem>
                                <IonItem className="w-full">
                                    <IonInput
                                        className='!text-[15px]'
                                        label="Flat/House/Office No."
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Flat/House/Office No."
                                    />
                                </IonItem>
                                <IonItem className="w-full">
                                    <IonInput
                                        className='!text-[15px]'
                                        label="Street/Society/Office Name"
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Street/Society/Office Name"
                                    />
                                </IonItem>
                                <IonItem className="w-full">
                                    <IonInput
                                        className='!text-[15px]'
                                        label="Locality"
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Locality"
                                    />
                                </IonItem>
                                <IonCol className='pl-4'>
                                    <IonLabel className="text-sm font-medium text-gray-800">
                                        Nickname of your address
                                    </IonLabel>
                                    <IonRadioGroup value="home">
                                        <IonItem className='radio-item'>
                                            <IonLabel className='!text-[15px]'>Home</IonLabel>
                                            <IonRadio slot="end" value="home" color="secondary" />
                                        </IonItem>
                                        <IonItem className='radio-item'>
                                            <IonLabel className='!text-[15px]'>Office</IonLabel>
                                            <IonRadio slot="end" value="office" color="secondary" />
                                        </IonItem>
                                        <IonItem className='radio-item'>
                                            <IonLabel className='!text-[15px]'>Others</IonLabel>
                                            <IonRadio slot="end" value="others" color="secondary" />
                                        </IonItem>
                                    </IonRadioGroup>
                                    <Button label="SAVE" className="!w-full mt-4" onClick={handleSaveClick}></Button>
                                </IonCol>
                            </IonRow>
                        </IonContent>
                        <PaymentModal showPayment={showPayment} setShowPayment={setShowPayment} />
                    </IonPage>
                )
            }
        </>
    )
}

export default NoteModal
