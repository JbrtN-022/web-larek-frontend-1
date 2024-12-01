export interface IApi {
	getCardItem: (id: string) => Promise<ICards>;
	getCardList: () => Promise<ICards[]>;
	orderItems(order: IOrder): Promise<IOrderResult>;
 }

export interface IAppState {
    catalog: ICards[];
    basket: string[];
    preview: string | null;
    order: IOrder | null;
}

export interface ICards {
	id: string;
	title: string;
	description: string;
	price: number | null;
	image: string;
	category: CardType;
	button: string;
}

export type CardType =
  | 'другое'
  | 'софт-скил'
  | 'дополнительное'
  | 'кнопка'
  | 'хард-скил';

  
export interface IPage {
	counter: number;
	gallery: HTMLElement[];
	locked: boolean;
}

export interface IForm {
	valid: boolean;
	errors: string[];
}

export interface IModalData {
	content: HTMLElement;
}

export interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export interface IOrder {
	address?: string;
	total?: number;
	items?: string[];
	email?: string;
	phone?: string;
	payment?: string;
}

export interface IOrderResult {
	id: string;
	total: number;
}

export interface ISuccess {
	close: HTMLButtonElement;
	description: HTMLSpanElement;
	total: number;
}

export interface ISuccessActions {
	onClick: () => void;
}

export interface IBasket {
	items: CardBasket[];
	total: number | null;
}

export type CardBasket = Pick<ICards, 'id' | 'title' | 'price'>;

  export type FormErrors = Partial<Record<keyof IOrder, string>>;