import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeSection from './HomeSection';
import Multiply from './Multiply';
import Compare from './Compare';
import University from './University';
import AboutMe from './AboutMe';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="🧰 ToolBox" component={HomeSection} />
        <Drawer.Screen name="🧑‍🤝‍🧑 Gender" component={Multiply} />
        <Drawer.Screen name="🔞 Age" component={Compare} />
        <Drawer.Screen name="🎓 University" component={University} />
        <Drawer.Screen name="😊 About Me" component={AboutMe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}