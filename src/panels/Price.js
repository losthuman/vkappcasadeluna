import React from 'react';
import { Panel, PanelHeader, HeaderButton, List, Cell, InfoRow, Group, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import "../components/table.sass";

const osname = platform();

const Price = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader 
			left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>Цены обучения</PanelHeader>
		<Group title='Стоимость абонемента (утро):'>
			<List>
				<Cell>
					<InfoRow>На 4 занятия - 1200 рублей</InfoRow>
				</Cell>
				<Cell>
					<InfoRow>На 8 занятий - 2000 рублей</InfoRow>
				</Cell>
				<Cell>
					<InfoRow>Разовое занятие - 300 рублей</InfoRow>
				</Cell>
			</List>
		</Group>

		<Group title='Стоимость абонемента (вечер):'>
			<List>
				<Cell>
					<InfoRow>На 4 занятия - 1300 рублей</InfoRow>
				</Cell>
				<Cell>
					<InfoRow>На 8 занятий - 2200 рублей</InfoRow>
				</Cell>
				<Cell>
					<InfoRow>На 12 занятий – 2900 рублей</InfoRow>
				</Cell>
				<Cell>
					<InfoRow>Разовое занятие - 350 рублей</InfoRow>
				</Cell>
			</List>
		</Group>
    </Panel>
);



export default Price;
