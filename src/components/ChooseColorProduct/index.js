import { useState } from 'react'
import { View, Text, Image } from 'react-native'

export default function ChooseColorProduct({route, navigation}) {
    const {productDetail, productColorSelected} = route.params 
    console.log(productColorSelected)
    const [productDetailSelected, setProductDetailSelected] = useState({
        path: productColorSelected?.path
    })
   
  return (
    <View>
        <View style={{flexDirection: "row"}}>
            <View style={{flex: 1}}>
                {
                    productColorSelected?.path
                    ? 
                    <Image
                        source={require(`../../../assets/${productDetailSelected.path}`)}
                        resizeMode='contain'
                        style={{width: "100px", height: "100px"}}
                    />
                    : 
                    <></>
                }
            </View>
            <View style={{flex: 2}}>
                <Text>
                    Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
            </View>
        </View>
    </View>
  )
}