import {View, Text, SafeAreaView} from 'react-native';
import {COLORS, icons, images, SIZES} from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";
import { useRouter, Stack } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => <ScreenHeaderBtn iconURL={icons.menu} dimension={'60%'}/>,
                headerRight: () => <ScreenHeaderBtn iconURL={images.profile} dimension={'60%'}/>,
                headerTitle: ""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding: SIZES.medium}}>
                    <Welcome
                    />
                    <Popularjobs
                    />
                    <Nearbyjobs
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;