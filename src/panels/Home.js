import React from 'react';
import PropTypes from 'prop-types';
import {Panel, ListItem, Button, Group, Div, Avatar, PanelHeader} from '@vkontakte/vkui';

const Home = ({id, go, fetchedUser}) => (
    <Panel id={id}>
        <PanelHeader> Casa de Luna | Estudio Flamenco</PanelHeader>
        {fetchedUser &&
        <Group title="Здравствуйте,">
            <ListItem
                before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
            >
                {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
            </ListItem>
        </Group>}

        <Group title="">
            <Div>
                <Button level="secondary" size="xl" onClick={go}
                        data-to="schedule">
                    Расписание занятий
                </Button>
            </Div>
            <Div>
                <Button level="secondary" size="xl" onClick={go}
                        data-to="price">
                    Стоимость обучения
                </Button>
            </Div>

        </Group>
    </Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;