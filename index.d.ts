declare module "native-base" {
	import * as React from "react";
	import * as ReactNative from "react-native";
	
	namespace NativeBase {
		interface Text extends ReactNative.TextProps {
			note?: boolean;
			uppercase?: boolean;
		}

		interface Switch extends ReactNative.SwitchProps {}

		interface View extends ReactNative.ViewProps {
			padder?: boolean;
		}

		interface Picker extends ReactNative.PickerProps {
			mode?: "dialog" | "dropdown";
			iosHeader?: string;
			inlineLabel?: boolean;
			headerBackButtonText?: string;
			placeholder?: string;
			placeholderStyle?: ReactNative.TextStyle;
			textStyle?: ReactNative.TextStyle;
			style?: ReactNative.TextStyle;
			iosIcon?: React.ReactElement<NativeBase.Icon>;
			note?: boolean;
			placeholderIconColor?: string;
			itemTextStyle?: ReactNative.TextStyle;
			headerStyle?: ReactNative.ViewStyle;
			headerTitleStyle?: ReactNative.TextStyle;
			headerBackButtonTextStyle?: ReactNative.TextStyle;
			modalStyle?: ReactNative.ViewStyle;
			renderHeader?: (backAction: any) => React.ReactElement<any>;
		}

		interface H1 extends ReactNative.TextProps {}
		/**
         * see Widget Text.js
         */
		interface H2 extends ReactNative.TextProps {}
		/**
         * see Widget Text.js
         */
		interface H3 extends ReactNative.TextProps {}
		/**
         * see Widget Text.js
         */
		interface BsStyle {
			success?: boolean;
			primary?: boolean;
			danger?: boolean;
			warning?: boolean;
			info?: boolean;
		}

		interface Badge extends ReactNative.ViewProps, BsStyle {}
		/**
         * see Widget CardSwiper.js
         */
		interface CardSwiper {}
		/**
         * see Widget DeckSwiper.js
         */
		interface DeckSwiper {
			/**
             * Array<any>
             */
			dataSource?: Array<any>;
			/**
             * Direction of iteration for elements
             * Default: iterates in backward direction
             */
			onSwipeLeft?: Function;
			/**
             * Direction of iteration for elements
             * Default: iterates in forward direction
             */
			onSwipeRight?: Function;
			/**
             * Takes a data entry from the data source and should return a renderable component to be rendered as the row.
             */
			renderItem?: Function;
		}
		/**
         * see Widget Header.js
         */
		interface Header {
			/**
             * Prop to be used with <Header> component to have Search bar onto the Header section of your screen.
             */
			searchBar?: boolean;
			/**
             * Wraps the search bar with predefined border options.
             * Default: regular
             */
			rounded?: boolean;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			/**
             * It is advisable to use hasTabs prop with Header while using Tab
             */
			hasTabs?: boolean;
			noShadow?: boolean;
			hasSubtitle?: boolean;
			span?: boolean;
			androidStatusBarColor?: string;
			iosBarStyle?: ReactNative.StatusBarStyle;
			hasSegment?: boolean;
			translucent?: boolean;
		}

		interface Left {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		interface Body {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		interface Right {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		/**
         * see Widget FooterTab.js
         */
		interface FooterTab {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}
		/**
         * see Widget Footer.js
         */
		interface Footer {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}
		/**
         * see Widget Title.js
         */
		interface Title {
			style?: ReactNative.TextStyle;
		}
		/**
         * see Widget Subtitle/index.js
         */
		interface Subtitle {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}
		/**
         * see Widget Container.js
         */
		interface Container {
			/**
             * The theme prop can be applied to any component of NativeBase.
             */
			theme?: Object;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}
		/**
         * see Widget Content.js
         */
		interface Content {
			/**
             * The theme prop can be applied to any component of NativeBase.
             */
			refreshing?: boolean;
			refreshControl?: object;
			theme?: Object;
			padder?: boolean;
			disableKBDismissScroll?: boolean;
			enableResetScrollToCoords?: boolean;
			contentOffset?: Object;
			scrollEnabled?: boolean;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			contentContainerStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			keyboardShouldPersistTaps?: string;
		        keyboardDismissMode?: string;
		}
		/**
         * see Widget Button.js
         */
		interface Button extends ReactNative.TouchableOpacityProps, BsStyle {
			/**
             * Defines button style
             */
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			/**
             * Defines button text style
             */
			textStyle?: ReactNative.TextStyle;
			/**
             * Block level button
             */
			block?: boolean;
			/**
             * Vertical button
             */
			vertical?: boolean;
			/**
			 * Button with badges
			 */
			badge?: boolean;
			//primary?: boolean,
			/**
             * Gives you effect of Icon-buttons.
             * To have button with transparent background, include this prop.
             */
			transparent?: boolean;
			//success?: boolean,
			//danger?: boolean,
			// warning?: boolean,
			//info?: boolean,
			color?: string;
			/**
             * Applies outline button style.
             */
			bordered?: boolean;
			/**
             * Renders button with slightly round shaped edges.
             */
			rounded?: boolean;
			/**
             * For large size button
             */
			large?: boolean;
			/**
             * For small size button
             */
			small?: boolean;
			/**
             * Used for Icon alignment.
             * Aligns icon to the left in button.
             * By default, icons are aligned to the left in button.
             */
			iconLeft?: boolean;
			/**
             * Used for Icon alignment.
             * Aligns icon to the right in button.
             */
			iconRight?: boolean;
			/**
			 * Used to enable/disable icons
			 * Icons align in the center of the bu8tton.
			 */
			icon?: boolean;
			/**
             * Disables onPress option for button
             */
			disabled?: boolean;
			active?: boolean;
			inputButton?: boolean;
			full?: boolean;
			light?: boolean;
			dark?: boolean;
			/**
             * [android] colored ripple effect
             */
			androidRippleColor?: string;
			/**
             * Segments
             */
			first?: boolean;
			last?: boolean;
		}
		/**

         * see Widget List.js
         */
		interface List extends ReactListViewProps {
			listBorderColor?: string;
			listDividerBg?: string;
			listNoteColor?: string;
			listItemPadding?: number;
			listNoteSize?: number;
			inset?: boolean;
			/**
             * Array of data chunks to render iteratively.
             */
			dataArray?: Array<any>;
			renderRow?: (
				rowData: any,
				sectionID: string | number,
				rowID: string | number,
				highlightRow?: boolean
			) => React.ReactElement<any>;
			dataSource?:ReactNative.ListViewDataSource;
				disableLeftSwipe?:boolean;
				disableRightSwipe?:boolean;
				rightOpenValue?:number;
				leftOpenValue?: number;
				renderRightHiddenRow?:(
					rowData: any,
					sectionID: string | number,
					rowID: string | number,
					rowMap?: any
				) => React.ReactElement<any>;
				renderLeftHiddenRow?:(
					rowData: any,
					sectionID: string | number,
					rowID: string | number,
					rowMap?: any
				) => React.ReactElement<any>;
				rowHasChanged?: (r1: any, r2: any) => boolean;
				onRowOpen?: Function;
				onRowClose?: Function;
				onRowDidOpen?: Function;
				onRowDidClose?: Function;
				swipeToOpenPercent?: number;
				closeOnRowBeginSwipe?: boolean;
		}
		/**
         * see Widget ListItem.js
         */
		interface ListItem extends ReactNative.TouchableOpacityProps {
			header?: boolean;
			noBorder?: boolean;
			noIndent?: boolean;
			/**
             * Aligns icon to the right of ListItem.
             * Default: false
             */
			iconRight?: boolean;
			/**
             * Aligns icon to the left of ListItem.
             * Default: true
             */
			iconLeft?: boolean;
			icon?: boolean;
			avatar?: boolean;
			thumbnail?: boolean;
			button?: boolean;
			/**
             * Helps to organize and group the list items.
             */
			itemDivider?: boolean;
			/**
             * Sub caption for List Item.
             */

			note?: string;
			itemHeader?: boolean;
			first?: boolean;
			last?: boolean;
			selected?: boolean;
			/**
             * [android] colored ripple effect
             */
			androidRippleColor?: string;
			touchableHighlightStyle?: ReactNative.ViewStyle;
		}

		interface Separator {
			bordered?: boolean;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		/**
         * see Widget CardItem.js
         */
		interface CardItem extends ReactNative.TouchableOpacityProps {
			header?: boolean;
			footer?: boolean;
			cardBody?: boolean;
			button?: boolean;
			bordered?: boolean;
		}
		/**
         * Override React ListViewProps
         */
		interface ReactListViewProps
			extends ReactNative.ScrollViewProps,
				React.Props<ReactNative.ListView> {
			/**
             * Flag indicating whether empty section headers should be rendered.
             * In the future release empty section headers will be rendered by
             * default, and the flag will be deprecated. If empty sections are not
             * desired to be rendered their indices should be excluded from
             * sectionID object.
             */
			enableEmptySections?: boolean;

			/**
             * How many rows to render on initial component mount.  Use this to make
             * it so that the first screen worth of data apears at one time instead of
             * over the course of multiple frames.
             */
			initialListSize?: number;

			/**
             * (visibleRows, changedRows) => void
             *
             * Called when the set of visible rows changes.  `visibleRows` maps
             * { sectionID: { rowID: true }} for all the visible rows, and
             * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
             * that have changed their visibility, with true indicating visible, and
             * false indicating the view has moved out of view.
             */
			onChangeVisibleRows?: (
				visibleRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>,
				changedRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>
			) => void;

			/**
             * Called when all rows have been rendered and the list has been scrolled
             * to within onEndReachedThreshold of the bottom.  The native scroll
             * event is provided.
             */
			onEndReached?: () => void;

			/**
             * Threshold in pixels for onEndReached.
             */
			onEndReachedThreshold?: number;

			/**
             * Number of rows to render per event loop.
             */
			pageSize?: number;

			/**
             * A performance optimization for improving scroll perf of
             * large lists, used in conjunction with overflow: 'hidden' on the row
             * containers.  Use at your own risk.
             */
			removeClippedSubviews?: boolean;

			/**
             * () => renderable
             *
             * The header and footer are always rendered (if these props are provided)
             * on every render pass.  If they are expensive to re-render, wrap them
             * in StaticContainer or other mechanism as appropriate.  Footer is always
             * at the bottom of the list, and header at the top, on every render pass.
             */
			renderFooter?: () => React.ReactElement<any>;

			/**
             * () => renderable
             *
             * The header and footer are always rendered (if these props are provided)
             * on every render pass.  If they are expensive to re-render, wrap them
             * in StaticContainer or other mechanism as appropriate.  Footer is always
             * at the bottom of the list, and header at the top, on every render pass.
             */
			renderHeader?: () => React.ReactElement<any>;

			/**
             * (rowData, sectionID, rowID) => renderable
             * Takes a data entry from the data source and its ids and should return
             * a renderable component to be rendered as the row.  By default the data
             * is exactly what was put into the data source, but it's also possible to
             * provide custom extractors.
             */
			renderRow?: (
				rowData: any,
				sectionID: string | number,
				rowID: string | number,
				highlightRow?: boolean
			) => React.ReactElement<any>;

			/**
             * A function that returns the scrollable component in which the list rows are rendered.
             * Defaults to returning a ScrollView with the given props.
             */
			renderScrollComponent?: (
				props: ReactNative.ScrollViewProps
			) => React.ReactElement<ReactNative.ScrollViewProps>;

			/**
             * (sectionData, sectionID) => renderable
             *
             * If provided, a sticky header is rendered for this section.  The sticky
             * behavior means that it will scroll with the content at the top of the
             * section until it reaches the top of the screen, at which point it will
             * stick to the top until it is pushed off the screen by the next section
             * header.
             */
			renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>;

			/**
             * (sectionID, rowID, adjacentRowHighlighted) => renderable
             * If provided, a renderable component to be rendered as the separator below each row
             * but not the last row if there is a section header below.
             * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
             */
			renderSeparator?: (
				sectionID: string | number,
				rowID: string | number,
				adjacentRowHighlighted?: boolean
			) => React.ReactElement<any>;

			/**
             * How early to start rendering rows before they come on screen, in
             * pixels.
             */
			scrollRenderAheadDistance?: number;

			/**
             * An array of child indices determining which children get docked to the
             * top of the screen when scrolling. For example, passing
             * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
             * top of the scroll view. This property is not supported in conjunction
             * with `horizontal={true}`.
             * @platform ios
             */
			stickyHeaderIndices?: number[];

			ref?: React.Ref<ReactNative.ListView & ReactNative.ScrollView & ReactNative.View>;
		}
		/**
         * see Widget Card.js
         */
		interface Card extends ReactNative.ViewProps {
			dataArray?: Array<any>;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			ref?: React.Ref<ReactNative.ViewProps | ReactListViewProps>;
			transparent?: boolean;
			noShadow?: boolean;

			// Adding ListView Props
			// dataSource?: ReactNative.ListViewDataSource; 
			enableEmptySections?: boolean;
			initialListSize?: number;
			onChangeVisibleRows?: (
				visibleRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>,
				changedRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>
			) => void;
			onEndReached?: () => void;
			onEndReachedThreshold?: number;
			pageSize?: number;
			removeClippedSubviews?: boolean;
			renderFooter?: () => React.ReactElement<any>;
			renderHeader?: () => React.ReactElement<any>;
			renderRow?: (
				rowData: any,
				sectionID: string | number,
				rowID: string | number,
				highlightRow?: boolean
			) => React.ReactElement<any>;
			renderScrollComponent?: (props: ReactNative.ScrollViewProps) => React.ReactElement<ReactNative.ScrollViewProps>;
			renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>;
			renderSeparator?: (
				sectionID: string | number,
				rowID: string | number,
				adjacentRowHighlighted?: boolean
			) => React.ReactElement<any>;
			scrollRenderAheadDistance?: number;
			stickyHeaderIndices?: number[];
			stickySectionHeadersEnabled?: boolean;
		}
		/**
         * react-native-easy-grid
         */
		interface Grid extends ReactNative.ViewProps {}
		interface Row extends ReactNative.ViewProps {
			size?: number;
		}
		interface Col extends ReactNative.ViewProps {
			size?: number;
		}
		/**
         * see Widget InputGroup.js
         */
		interface InputGroup extends ReactNative.ViewProps {
			/**
             * Wraps the textbox with predefined border options.
             * Default: underline
             */
			borderType?: "rounded" | "regular" | "underline";
			toolbar?: boolean;
			atoolbar?: boolean;
			/**
             * If true, the icon in the input text box appears to the right.
             * Default: true
             */
			iconRight?: boolean;
			/**
             * The border color of textbox for valid input.
             */
			success?: boolean;
			/**
             * The border color of textbox for invalid input.
             */
			error?: boolean;
			/**
             * Disables inputting data.
             */
			disabled?: boolean;
			regular?: boolean;
			underline?: boolean;
			rounded?: boolean;
		}
		/**
         * see Widget Input.js
         */
		interface Input extends ReactNative.TextInputProps {
			label?: string;
			/**
             * Label placed to the left of the input element.
             * When the user enters text, the label does not hide.
             * This can also be used along with placeholder.
             */
			inlineLabel?: boolean;
			/**
             * Places the label on top of the input element which appears like a stack.
             * This can also be used along with placeholder.
             */
			stackedLabel?: boolean;
			/**
             * Disables inputting data.
             */
			disabled?: boolean;
			getRef?: React.Ref<ReactNative.TextInput>;
		}
		/**
         * see Widget Textarea.js
         */
		interface Textarea extends ReactNative.TextInputProps {
			rowSpan: number;
		}

		interface Label {
			style?: ReactNative.TextStyle;
		}
		/**
         * see Widget Icon.js
         */
		interface Icon {
			name: string;
			type?: "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial" ;
			// TODO position attribute of ReactNative.FlexStyle hasn't another position values without "absolute" and "relative"
			style?: any;
			onPress?: (e?: any) => any;
			active?: boolean;
			ios?: string;
			android?: string;
			color?: string;
			fontSize?: number;
		}
		/**
         * see Widget Icon.js
         */
		interface Thumbnail extends ReactNative.ImageProps {
			/**
             * Dimension of thumbnail.
             * Default: 30
             */
			size?: number;
			/**
             * Represents shape of thumbnail.
             * By default thumbnail is circle in shape.
             */
			circular?: boolean;
			/**
             * Represents shape of thumbnail.
             * By default thumbnail is circle in shape.
             */
			square?: boolean;
			small?: boolean;
			large?: boolean;
		}
		/**
         * see Widget Spinner.js
         */
		interface Spinner extends ReactNative.ActivityIndicatorProps {
			inverse?: boolean;
		}
		/**
         * see Widget CheckBox.js
         */
		interface CheckBox extends ReactNative.TouchableOpacityProps{
			checked?: boolean;
			color?: string;
		}
		/**
         * see Widget CheckBox.js
         */
		interface Radio extends ReactNative.TouchableOpacityProps {
			selected?: boolean;
		}
		/**
         * see Widget ProgressBar.js
         */
		interface ProgressBar {
			progress?: number;
			color?: string;
			inverse?: boolean;
		}
	
		interface ScrollableTab {
            goToPage?: Function;
            activeTab?: number;
            tabs?: Array<any>;
            backgroundColor?: string;
            activeTextColor?: string;
            inactiveTextColor?: string;
            scrollOffset?: number;
            style?: ReactNative.ViewStyle;
            tabStyle?: ReactNative.ViewStyle;
            tabsContainerStyle?: ReactNative.ViewStyle;
            renderTab?: Function;
            underlineStyle?: ReactNative.ViewStyle;
            onScroll?: Function;
        }

		/**
         * see Widget Tabs.js
         */
		interface Tabs {
			renderTabBar?: Function;
			tabBarPosition?: "top" | "bottom";
			edgeHitWidth?: number;
			springTension?: number;
			springFriction?: number;
			onChangeTab?: Function;
			locked?: boolean;
			initialPage?: number;
			tabBarUnderlineStyle?:ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			tabBarBackgroundColor?:string;
			tabBarActiveTextColor?:string;
			tabBarInactiveTextColor?:string;
			tabBarTextStyle?:ReactNative.TextStyle;
			tabContainerStyle?:ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			contentProps?: ReactNative.ScrollViewProps;
		}

		interface Tab {
			heading: React.ReactElement<TabHeading> | string;
			tabStyle?:ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			activeTabStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			textStyle?: ReactNative.TextStyle;
			activeTextStyle?: ReactNative.TextStyle;
		}
		interface TabHeading {
			tabStyle?:ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			activeTabStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			textStyle?: ReactNative.TextStyle;
			activeTextStyle?: ReactNative.TextStyle;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		interface Item {
			fixedLabel?: boolean;
			floatingLabel?: boolean;
			inlineLabel?: boolean;
			stackedLabel?: boolean;
			placeholderLabel?: boolean;
			bordered?: boolean;
			regular?: boolean;
			underline?: boolean;
			rounded?: boolean;
			disabled?: boolean;
			error?: boolean;
			placeholder?: string;
			secureTextEntry?: boolean;
			success?: boolean;
			last?: boolean;
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		interface Form {
			style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
		}

		interface Fab {
			active?: boolean;
			direction?: "down" | "up" | "left" | "right";
			containerStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
			onPress?: () => void;
			position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
			style?: ReactNative.ViewStyle;
		}

		interface Image extends ReactNative.TextProps {}

		interface Segment extends ReactNative.TextProps {}

		interface Root extends ReactNative.TextProps {}

		interface StyleProvider {
			style?: any;
		}
		interface SwipeRow {
            leftOpenValue?: number;
            rightOpenValue?: number;
            closeOnRowPress?: boolean;
            disableLeftSwipe?: boolean;
            disableRightSwipe?: boolean;
            recalculateHiddenLayout?: boolean;
            preview?: boolean;
            previewDuration?: number;
            directionalDistanceChangeThreshold?: number;
			swipeToOpenPercent?: number;
			stopLeftSwipe?: number;
			stopRightSwipe?: number;
			onRowOpen?: Function;
			onRowClose?: Function;
			left?: React.ReactElement<any>;
			body?: React.ReactElement<any>;
			right?: React.ReactElement<any>;
			style?: ReactNative.ViewStyle;
		}
		
		interface Accordion {
			dataArray: Array<any>;
			headerStyle?: ReactNative.ViewStyle;
			contentStyle?: ReactNative.ViewStyle;
			renderHeader?: (item: any) => React.ReactElement<any>;
			renderContent?: (item: any) => React.ReactElement<any>;
			icon?: string;
			expandedIcon?: string;
			iconStyle?: ReactNative.TextStyle;
			expandedIconStyle?: ReactNative.TextStyle;
			style?: ReactNative.ViewStyle;
		}

		interface DatePicker {
			defaultDate?: Date;
			minimumDate?: Date;
			maximumDate?: Date;
			locale?: string;
			placeHolderText?: string;
			textStyle?: ReactNative.TextStyle;
			placeHolderTextStyle?: ReactNative.TextStyle;
			androidMode?: "calendar" | "spinner" | "default";
			timeZoneOffsetInMinutes?: number;
			modalTransparent?: boolean;
			animationType?: "slide" | "fade" | "none";
			disabled?: boolean;
			onDateChange?: (date: any) => void;
			formatChosenDate?: (date: any) => void;
		}
	}

	// Export definitions
	/**
     * NativeBase.Container
     *
     * Provides its own frame component, named after <Container>.
     * All the components should be included within the Container.
     * Container takes mainly two components: <Header> and <Content>.
     * Container comes with its predefined stylesheet, with an added advantage of accepting user-defined styles.
     * Usage of Container's Header component is very similar to your HTML <head>.
     * The Content component of Container is nothing but the body section of your screen.
     */
	export class Container extends React.Component<NativeBase.Container, any> {}
	/**
     * NativeBase.Header
     *
     * NativeBase component that renders as Header (navbar) for your screen.
     * There can be a single Header component into your Container.
     * To have Header for your screen, include <Header> component within <Container>.
     * NativeBase gives you flexibility to define your Header component anywhere in the bounds of Container.
     * Header takes input as: Button and Title (Text)
     * The components those are defined within <Header> will be rendered in the same order that you define them.
     * Header provides you with stylesheet.
     * User can add custom styles while defining <Header> within their app.
     * Replacing Component: React Native <View>
     */
	export class Header extends React.Component<NativeBase.Header, any> {}
	/**
     * NativeBase.Content
     *
     * This is a NativeBase component which renders as body element of your screen.
     * Each screen can have only one <Content> component and can be defined anywhere within the Container.
     * Content takes in the whole collection of React Native and NativeBase components.
     * Content provides you with stylesheet.
     * User can add custom styles while defining <Content> within their app.
     * Replacing Component: React Native <ScrollView>
     */
	/**
     * NativeBase.Left
     */
	export class Left extends React.Component<NativeBase.Left, any> {}
	/**
     * NativeBase.Right
     */
	export class Right extends React.Component<NativeBase.Right, any> {}
	/**
     * NativeBase.Body
     */
	export class Body extends React.Component<NativeBase.Body, any> {}

	export class Content extends React.Component<NativeBase.Content, any> {}
	/**
     * NativeBase.FooterTab
     */
	export class FooterTab extends React.Component<NativeBase.FooterTab, any> {}
	/**
     * NativeBase.Footer
     */
	export class Footer extends React.Component<NativeBase.Footer, any> {}
	/**
     * NativeBase.Title
     */
	export class Title extends React.Component<NativeBase.Title, any> {}

	export class Subtitle extends React.Component<NativeBase.Subtitle, any> {}

	/**
     * NativeBase.Button
     *
     * Provides Button component which is readily not available in React Native.
     * Supports React Native app on both iOS and Android devices.
     * Button component takes input such as: Text, Icon, Text with Icon.
     * NativeBase gives you privilege to customize the props of this component.
     * Example: To have custom style for button, include them in style prop of button.
     * Intakes user-defined styles.
     * NativeBase has provided its users with enormous list of props that can be used with Button.
     * Replacing Component: React Native <TouchableOpacity>
     */
	export class Button extends React.Component<NativeBase.Button, any> {}
	/**
     * NativeBase.View
     */
	export class View extends React.Component<NativeBase.View, any> {}
	/**
     * NativeBase.Text
     */
	export class Text extends React.Component<NativeBase.Text, any> {}
	/**
     * NativeBase.Switch
     */
	export class Switch extends React.Component<NativeBase.Switch, any> {}
	/**
     * NativeBase.Picker
     */
	export class Picker extends React.Component<NativeBase.Picker, any> {}
	namespace Picker {
		export class Item extends React.Component<ReactNative.PickerItemProps, any> {}
	}
	/**
     * NativeBase.List
     *
     * A base component for specifying lists of information. List must contain one or more list elements.
     * Props provide configurability for several features. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to  interact with.
     */
	export class List extends React.Component<NativeBase.List, any> {}
	/**
     * NativeBase.ListItem
     *
     * • This is the child component of List.
     * • Defines a list item.
     * • Adds border at bottom of each ListItem.
     * • List takes any number of ListItem.
     */
	export class ListItem extends React.Component<NativeBase.ListItem, any> {}
	/**
     * NativeBase.H1
     */
	export class H1 extends React.Component<NativeBase.H1, any> {}
	/**
     * NativeBase.H2
     */
	export class H2 extends React.Component<NativeBase.H2, any> {}
	/**
     * NativeBase.H3
     */
	export class H3 extends React.Component<NativeBase.H3, any> {}
	/**
     * NativeBase.Row
     */
	export class Row extends React.Component<NativeBase.Row, any> {}
	/**
     * NativeBase.Col
     */
	export class Col extends React.Component<NativeBase.Col, any> {}
	/**
     * NativeBase.Grid
     */
	export class Grid extends React.Component<NativeBase.Grid, any> {}
	/**
     * NativeBase.InputGroup
     *
     * A foundational component for inputting text into the app via a keyboard.
     * Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
     * Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.
     */
	export class InputGroup extends React.Component<NativeBase.InputGroup, any> {
		public static propTypes: any;
	}
	/**
     * NativeBase.Input
     */
	export class Input extends React.Component<NativeBase.Input, any> {}
	/**
     * NativeBase.Textarea
     */
	export class Textarea extends React.Component<NativeBase.Textarea, any> {}
	/**
     * NativeBase.Icon
     */
	export class Icon extends React.Component<NativeBase.Icon, any> {}
	/**
     * NativeBase.Thumbnail
     *
     * Thumbnail component works very similar to Image.
     * It helps you to showcase an image with variuos dimensions and shapes.
     * By default, Thumbnail renders an image in circular shape.
     */
	export class Thumbnail extends React.Component<NativeBase.Thumbnail, any> {}
	/**
     * NativeBase.Card
     *
     * Card is a flexible and extensible content container.
     * It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
     * NativeBase Cards support a wide variety of content, including images, text, list groups, links, and more.
     * Mix and match multiple content types to create the card you need.
     */
	export class Card extends React.Component<NativeBase.Card, any> {}
	/**
     * NativeBase.CardItem
     *
     * This is the child component of Card. Works very similar to the list items of list. Card takes any number of CardItem.
     * CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon.
     */
	export class CardItem extends React.Component<NativeBase.CardItem, any> {}
	/**
     * NativeBase.CardSwiper
     *
     * Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out.
     * NativeBase Card Swiper helps you evaluate one option at a time, instead of selecting from a set of options.
     */
	export class CardSwiper extends React.Component<NativeBase.CardSwiper, any> {}
	/**
     * NativeBase.DeckSwiper
     */
	export class DeckSwiper extends React.Component<NativeBase.DeckSwiper, any> {}
	/**
     * NativeBase.Badge
     *
     * All of us must have seen notification badges somewhere, such as on smart phones or facebook.
     */
	export class Badge extends React.Component<NativeBase.Badge, any> {}
	/**
     * NativeBase.Spinner
     */
	export class Spinner extends React.Component<NativeBase.Spinner, any> {}
	/**
     * NativeBase.CheckBox
     */
	export class CheckBox extends React.Component<NativeBase.CheckBox, any> {}
	/**
     * NativeBase.Radio
     */
	export class Radio extends React.Component<NativeBase.Radio, any> {}
	/**
     * NativeBase.ProgressBar
     */
	export class ProgressBar extends React.Component<NativeBase.ProgressBar, any> {}
	/**
     * NativeBase.ScrollableTab
     */
	export class ScrollableTab extends React.Component<NativeBase.ScrollableTab, any> { }
	/**
     * NativeBase.Tabs
     *
     * Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens.
     * It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.
     */
	export class Tabs extends React.Component<NativeBase.Tabs, any> {}
	/**
     * NativeBase.Tab
     */
	export class Tab extends React.Component<NativeBase.Tab, any> {}

	export class TabHeading extends React.Component<NativeBase.TabHeading, any> {}
	/**
     * NativeBase.Item
     */
	export class Item extends React.Component<NativeBase.Item, any> {}
	/**
     * NativeBase.Form
     */
	export class Form extends React.Component<NativeBase.Form, any> {}
	/**
     * NativeBase.Fab
     */
	export class Fab extends React.Component<NativeBase.Fab, any> {}

	export class Separator extends React.Component<NativeBase.Separator, any> {}

	export class Label extends React.Component<NativeBase.Label, any> {}

	export class StyleProvider extends React.Component<NativeBase.StyleProvider, any> {}

	export class ActionSheet {
		static show: (
			configuration: {
				options: string[] | Array<{text: string, icon?: string, iconColor?: string}>;
				cancelButtonIndex?: number;
				destructiveButtonIndex?: number;
				title?: string;
			},
			onSelect: (index: number) => void
		) => void;
	}

	export class Image extends React.Component<NativeBase.Image, any> {}

	export class Segment extends React.Component<NativeBase.Segment, any> {}

	export class Root extends React.Component<NativeBase.Root, any> {}

	export class SwipeRow extends React.Component<NativeBase.SwipeRow, any> {}
	
	export class Toast {
		public static show(configuration: {
			text: string;
			buttonText?: string;
			position?: "top" | "bottom" | "center";
			type?: "danger" | "success" | "warning";
			duration?: number;
			onClose?: (reason: "user" | "timeout" | "functionCall") => any;
			textStyle?: ReactNative.TextStyle;
			buttonTextStyle?: ReactNative.TextStyle;
			buttonStyle?: ReactNative.ViewStyle;
		}): void;
	}
	
	export class Accordion extends React.Component<NativeBase.Accordion, any>{ }

	export class DatePicker extends React.Component<NativeBase.DatePicker, any> { }
}
