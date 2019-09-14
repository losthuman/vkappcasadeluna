import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, Div, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Price = (props) => (
    <Panel id={props.id}>
        <PanelHeader 
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>Цены обучения</PanelHeader>
        <Div>
			<h2>Наши новые цены</h2>
		</Div>
    </Panel>
);

Price.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Price;
