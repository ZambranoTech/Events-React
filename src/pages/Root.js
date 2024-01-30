import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
    const navigation = useNavigation();
    
    return <>
    <MainNavigation />
    {navigation.state === 'loading' && <p style={{textAlign: 'center'}}>Loading...</p>}
    {navigation.state === 'idle' && <Outlet />}
    </>
}