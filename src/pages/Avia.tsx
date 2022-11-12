import React, { useMemo, useState } from "react";
import CustomForm, { FormInputsData } from "../components/CustomForm"
import Calendar from "../assets/images/calendar.png"
import CalendarSucsess from "../assets/images/calendar-sucsess.png"
import { useAppDispatch } from "../hooks/redux";
import { IAviaState, updateAviaState } from "../store/slices/AviaSlice"
import { useNavigate } from "react-router-dom";


const formInputData: FormInputsData<IAviaState>[]= [
    {
        key: 'startLocation',
        placeholder: 'Город вылета',
        label: 'Откуда',
        pattern: /.{3}/,
        icon: '',
        successIcon: '',
    },
    {
        key: 'endLocation',
        placeholder: 'Город прилёта',
        label: 'Куда',
        pattern: /.{3}/,
        icon: '',
        successIcon: '',
    },
    {
        key: 'startDate',
        placeholder: 'дд.мм.гг',
        label: 'Туда',
        pattern: /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/,
        icon: Calendar,
        successIcon: CalendarSucsess,
    },

    {
        key: 'endDate',
        placeholder: 'дд.мм.гг',
        label: 'Обратно',
        pattern: /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/,
        icon: Calendar,
        successIcon: CalendarSucsess,
    },
]

export default function Avia() {
    const aviaFormDefaultState = {startLocation: "", endLocation: "",startDate: "", endDate: "",} as IAviaState
    const requeredFields = ["startLocation", "endLocation", "startDate"] as Array<keyof IAviaState>;
    const dispatcher = useAppDispatch()
    const navigate = useNavigate();

    const sendForm = (formData: IAviaState) => {
      dispatcher(updateAviaState(formData))
      navigate("/avia/info")
    }

  return (
    <section className="avia">
      <div className="container">
        <div className="avia__inner">
            <CustomForm sendForm={sendForm} inputsData={formInputData} requeredFields={requeredFields} defauldFormState={aviaFormDefaultState}></CustomForm>
        </div>
      </div>
    </section>
  );
}
