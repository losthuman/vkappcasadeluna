import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Table} from '../components/table';
import '@vkontakte/vkui/dist/vkui.css';

const osname = platform();

const Schedule = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader 
			left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>Расписание занятий</PanelHeader>
        <Table />
    </Panel>
);

Schedule.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Schedule;
