import { useState } from 'react'
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductDetail({ navigation }) {
    const [productDetail, setProductDetail] = useState({
        name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
        star: 5,
        price: 1790000,
        priceUnit: "đ",
        review: 828,
        supplier: "Tiki Tradding",
        colors: [
            {
                name: "Xanh nhạt",
                code: "#C5F1FB",
                path: "vs_silver.png"
            },
            {
                name: "Đỏ",
                code: "#F30D0D",
                path: "vs_red.png"
            },
            {
                name: "Đen",
                code: "#000000",
                path: "vs_black.png"
            },
            {
                name: "Xanh đậm",
                code: "#234896",
                path: "vs_blue.png"
            }
        ]
    })
    const [productColorSelected, setProductColorSelected] = useState(()=> productDetail?.colors?.[0])
   
    return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff", fontFamily: "roboto"}}>
        <View style={{flex: 1, paddingVertical :"15px", paddingHorizontal: "25px"}}>
            <View style={{flex: 1}}>
                {
                    productColorSelected?.path
                    ?
                    <Image
                    source={require(`../../../assets/${productColorSelected.path}`)}
                    style={{width: "100%", height: "100%"}}
                    resizeMode="contain"
                    />
                    : <></>
                }
            </View>
            <View style={{flex: 1}}>
                <Text
                    style={{fontSize: "15px", fontWeight: "400"}}
                >{productDetail?.name}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "12px"}}>
                    <View style={{flexDirection: "row"}}>
                        {
                            Array(5).fill(0).map((item, index)=>{
                                if (index < productDetail?.star){
                                    return <Entypo name="star" key={index} size={24} color="#E0E41A" />
                                }
                                return <Entypo name="star" key={index} size={24} color="#CCC" />
                            })
                        }
                    </View>
                    <Text style={{fontSize: "15px"}}>
                        (Xem {productDetail?.review} đánh giá)
                    </Text>
                   
                </View>
                <View>
                    <View
                        style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}
                    >
                        <Text
                            style={{fontSize: "18px", fontWeight: "bold"}}
                        >{
                                new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd"}).format(productDetail.price)
                                }
                        </Text>
                        <Text
                            style={{fontSize: "16px", fontWeight: "bold", textDecorationLine: "line-through", color: "#999", marginLeft: "10px"}}
                        >{
                                new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd"}).format(productDetail.price)
                                }
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginTop: "20px", alignItems: "center"}}>
                    <Text
                        style={{color: "#fa0000", fontSize: "12px", fontWeight: "700", marginRight: "10px"}}
                    >Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image source={require("../../../assets/Ask.png")}
                        style={{width: "20px", height: "20px"}}
                        resizeMode='contain'
                    />
                </View>
                <Pressable style={{borderRadius: "12px", justifyContent: "center", borderWidth: 1, marginTop: "20px"
                , position: "relative", paddingHorizontal: "20px"}}
                    onPress={()=> navigation.navigate("ChooseColorProduct", {productDetail, productColorSelected})}
                >
                    <Text
                        style={{textAlign: "center", paddingVertical :"8px", fontSize: "15px", fontWeight: "500"}}
                    >{productDetail?.colors?.length} MÀU - CHỌN MÀU</Text>
                    <FontAwesome name="angle-right" size={24} color="black" 
                        style={{position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", paddingHorizontal: "10px"}}
                    />
                </Pressable>
                <Pressable style={{backgroundColor: "#EE0A0A", marginTop: "auto", borderRadius: "12px"}}>
                    <Text style={{textAlign: "center", color: "#fff", padding: "12px", fontSize: "20px", fontWeight: "500"}}>
                        CHỌN MUA
                    </Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}