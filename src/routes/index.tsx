import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screen/main';
import Details from '../screen/details';
import Configuration from '../screen/configuration';

const Tab = createNativeStackNavigator();

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Tela Inicial" component={Main} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name="Tela de Detalhes" component={Details} options={{ headerTitleAlign: 'center' }} />
            <Tab.Screen name="Tela de Configurações" component={Configuration} options={{ headerTitleAlign: 'center' }} />
        </Tab.Navigator>
    </NavigationContainer>
}