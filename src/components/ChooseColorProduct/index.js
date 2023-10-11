import { useState } from 'react'
import { View, Text, Image, Pressable, SafeAreaView } from 'react-native'

export default function ChooseColorProduct({route, navigation}) {
    const {productDetail, productColorSelected, setProductColorSelected} = route.params 

    const [productDetailSelected, setProductDetailSelected] = useState({
        path: productColorSelected?.path
    })
   
    const handleSelectColor = (color) => {
        setProductDetailSelected({
            ...productDetailSelected,
            path: color.path,
            name: color.name,
            code: color.code
        })
    }
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20}}>
        <View style={{flexDirection: "row", backgroundColor: "#fff", padding: 15}}>
            <View style={{flex: 1}}>
                {
                    productDetailSelected?.path
                    ? 
                    <Image
                        source={productDetailSelected?.path}
                        resizeMode='contain'
                        style={{width: 102, height: 132}}
                    />
                    : 
                    <></>
                }
            </View>
            <View style={{flex: 2, paddingHorizontal: 15}}>
                <Text style={{fontSize: 15, marginTop: 12, width: "80%", fontWeight: "500"}}>
                    Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
                {
                    productDetailSelected?.name
                    ?
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 6}}>
                        <Text style={{fontSize: 15}}>Màu: </Text>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{productDetailSelected.name}</Text>
                    </View>
                    : <></>
                }
                 {
                    productDetailSelected?.name
                    ?
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 6}}>
                        <Text style={{fontSize: 15}}>Cung cấp bởi </Text>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{productDetail.supplier}</Text>
                    </View>
                    : <></>
                }
                {
                    productDetailSelected?.name
                    ?
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 10}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd"}).format(productDetail.price)}</Text>
                    </View>
                    : <></>
                }
                
            </View>
        </View>
        <View style={{flexGrow: 1, padding: 20}}>
            <Text style={{fontSize: 18, fontWeight: "500"}}>Chọn một màu bên dưới: </Text>
            <View style={{alignItems: "center"}}> 
                {
                    productDetail?.colors?.map((color, index)=>{
                        return (
                            <Pressable
                                key={index}
                                onPress={()=>{handleSelectColor(color)}}
                            >
                                <View style={{width: 80, height: 85, backgroundColor: color.code
                                , marginVertical: 7}}
                                >

                                </View>
                            </Pressable>
                        )
                    })
                }
            </View>
            <Pressable style={{marginTop: "auto"}}
                onPress={()=>{
                    setProductColorSelected(productDetailSelected)
                    navigation.navigate("ProductDetail")}}
                >
                <Text style={{backgroundColor: "#4d6dc1", fontSize: 20, textAlign: "center"
                , padding: 12, borderRadius: 12, color: "#fff", fontWeight: "bold"}}>XONG</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}