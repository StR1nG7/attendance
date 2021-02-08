import React from "react";

interface IInstructionsProps {
	isOpen: boolean,
	handleClick: () => void
}

const Instructions: React.FC<IInstructionsProps> = ({isOpen, handleClick}) => {

	return (
    <p className={isOpen ? 'alert-info alert-info--open' : 'alert-info'}>
      <i className="material-icons" onClick={handleClick}>info_outline</i>
      Введіть кількість учнів, які відсутні по хворобі, з поважних причин, без поважних причин та які взагалі не
      відвідують заняття. Поля Інші та Всього і дані за Рік порахуються автоматично, після цього натисніть кнопку Зберегти.
      При корегуванні невірно введених даних введіть правильне число, і знову натисніть Зберегти.
    </p>
	)
};

export default Instructions;

