import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export interface DropdownOption<Val extends string> {
	label: string;
	value: Val;
}

interface Props<T extends string> {
	options: DropdownOption<T>[];
	value: T;
}

function Dropdown<T extends string>(props: Props<T>) {
	const { options = [], value: selectedValue } = props;
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(selectedValue);
	const [items, setItems] = React.useState<DropdownOption<T>[]>(options);

	return (
		<DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} />
	);
}

export default Dropdown;
