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
    <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: "row", backgroundColor: "#fff", padding: "15px"}}>
            <View style={{flex: 1}}>
                {
                    productColorSelected?.path
                    ? 
                    <Image
                        source={require(`../../../assets/${productDetailSelected.path}`)}
                        resizeMode='contain'
                        style={{width: "102px", height: "132px"}}
                    />
                    : 
                    <></>
                }
            </View>
            <View style={{flex: 2, paddingHorizontal: "15px"}}>
                <Text style={{fontSize: "15px", marginTop: "12px", width: "80%", fontWeight: "500"}}>
                    Điện Thoại Vsmart Joy 3
                    Hàng chính hãng
                </Text>
                {
                    productDetailSelected?.name
                    ?
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: "6px"}}>
                        <Text style={{fontSize: "15px"}}>Màu: </Text>
                        <Text style={{fontWeight: "bold", fontSize: "15px"}}>{productDetailSelected.name}</Text>
                    </View>
                    : <></>
                }
                 {
                    productDetailSelected?.name
                    ?
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: "6px"}}>
                        <Text style={{fontSize: "15px"}}>Cung cấp bởi </Text>
                        <Text style={{fontWeight: "bold", fontSize: "15px"}}>{productDetail.supplier}</Text>
                    </View>
                    : <></>
                }
                {
                    productDetailSelected?.name
                    ?
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: "18px", marginTop: "10px"}}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd"}).format(productDetail.price)}</Text>
                    </View>
                    : <></>
                }
                
            </View>
        </View>
        <View style={{flexGrow: 1, padding: "20px"}}>
            <Text style={{fontSize: "18px", fontWeight: "500"}}>Chọn một màu bên dưới: </Text>
            <View style={{alignItems: "center"}}> 
                {
                    productDetail?.colors?.map((color, index)=>{
                        return (
                            <Pressable
                                key={index}
                                onPress={()=>{handleSelectColor(color)}}
                            >
                                <View style={{width: "80px", height: "85px", backgroundColor: color.code
                                , marginVertical: "7px"}}
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
                <Text style={{backgroundColor: "#4d6dc1", fontSize: "20px", textAlign: "center"
                , padding: "12px", borderRadius: "12px", color: "#fff", fontWeight: "bold"}}>XONG</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}