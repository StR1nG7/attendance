import { IAnimateButtonAction } from "../actions/actionCreators";

export interface IStartAnimation {
	id: string
}

const animateButtonReducer = (state= '', action: IAnimateButtonAction): string => {
	switch (action.type) {
		case 'ANIMATE_BUTTON':
			return action.id;
		default:
			return state;
	}
};

export {animateButtonReducer as animateButton};
