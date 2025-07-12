import { IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonRow } from '@ionic/react'
import { useState } from 'react'
import Button from '../../components/common/Button'
import Header from '../../components/header'
import MyProfile from '../my-profile/MyProfile'

type EditModalProps = {
    showEditProfileModal?: boolean;
    setShowEditProfileModal?: any;
}

const EditProfile = ({ showEditProfileModal = false, setShowEditProfileModal }: EditModalProps) => {
    const [showProfile, setShowEditProfile] = useState(false)
    return (
        <>
            {
                showEditProfileModal && (
                    <IonPage className="bg-[#F4F5F8] bg-color">
                        <Header
                            showBackButton
                            onBackClick={() => { setShowEditProfile(true) }}
                            Heading="Edit Profile"
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
                                        label="Phone *"
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Phone"
                                    />
                                </IonItem>
                                <IonItem className="w-full">
                                    <IonInput
                                        className='!text-[15px]'
                                        label="Email *"
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Email Address"
                                    />
                                </IonItem>
                                <IonItem className="w-full">
                                    <IonInput
                                        className='!text-[15px]'
                                        label="Address *"
                                        labelPlacement="stacked"
                                        type="text"
                                        placeholder="Enter Address"
                                    />
                                </IonItem>
                                <IonCol className='pl-4'>
                                    <IonLabel className="text-sm font-medium text-gray-800">
                                        Gender
                                    </IonLabel>
                                    <IonRadioGroup value="female">
                                        <IonItem className='radio-item'>
                                            <IonLabel className='!text-[15px]'>Female</IonLabel>
                                            <IonRadio slot="end" value="female" color="secondary" />
                                        </IonItem>
                                        <IonItem className='radio-item'>
                                            <IonLabel className='!text-[15px]'>Male</IonLabel>
                                            <IonRadio slot="end" value="male" color="secondary" />
                                        </IonItem>
                                        <IonItem className='radio-item'>
                                            <IonLabel className='!text-[15px]'>Others</IonLabel>
                                            <IonRadio slot="end" value="others" color="secondary" />
                                        </IonItem>
                                    </IonRadioGroup>
                                    <Button onClick={() => setShowEditProfile(true)} label="SAVE" className="!w-full mt-4"></Button>
                                </IonCol>
                            </IonRow>
                        </IonContent>
                        <MyProfile showMyProfile={showProfile} />
                    </IonPage>
                )
            }
        </>
    )
}

export default EditProfile
