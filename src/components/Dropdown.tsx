import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export interface DropdownOption<Val extends string> {
	label: string;
	value: Val;
}

interface Props<T extends string> {
	options: DropdownOption<T>[];
	value: T;
	style?: StyleProp<ViewStyle>;
}

function Dropdown<T extends string>(props: Props<T>) {
	const { options = [], value: selectedValue, style } = props;
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(selectedValue);
	const [items, setItems] = React.useState<DropdownOption<T>[]>(options);

	const dropdownStyle = StyleSheet.compose(
		{ backgroundColor: 'transparent', borderColor: 'hsla(0,0%,100%,0.25)', borderWidth: 2 },
		style
	);

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			style={dropdownStyle}
		/>
	);
}

export default Dropdown;
