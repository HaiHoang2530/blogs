import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import TabStack from './stack/tabStackNavigation';
export default function Nav (){
    return(
        <NavigationContainer>
            <TabStack/>
        </NavigationContainer>
    )
}