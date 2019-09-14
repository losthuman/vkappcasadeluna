import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, Div, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import "../components/table.sass";

const osname = platform();

const Price = (props) => (
    <Panel id={props.id}>
        <PanelHeader 
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>Цены обучения</PanelHeader>
        <Div>
			
			<h4>Стоимость абонемента (утро): </h4>
				<ul>
					<li>На 4 занятия - 1200 руб</li>
					<li>На 8 занятий - 2000 руб</li>
					<li>Разовое занятие - 300 руб</li>
				</ul>
			<h4>Стоимость абонемента (вечер):</h4>
				<ul>
					<li>На 4 занятия - 1300 руб</li>
					<li>На 8 занятий - 2200 руб</li>
					<li>На 12 занятий – 2900 руб</li>
					<li>Разовое занятие - 350 руб</li>
				</ul>

		</Div>
    </Panel>
);

Price.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Price;
