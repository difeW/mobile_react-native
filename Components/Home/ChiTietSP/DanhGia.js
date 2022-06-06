
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState, useContext } from 'react';
import { Dimensions } from 'react-native';
import StarList from '../StarList';
import { useEffect } from 'react'
import axios from 'axios';
import { AuthContext } from '../../../Context/Auth';
import { selectProductContext } from '../../../Context/selectProductContext';
import CountStar from './CountStar';
import { url } from '../../../Context/container';


const DanhGia = ({ Data }) => {
    const { authState } = useContext(AuthContext)
    const { id, setId } = useContext(selectProductContext)
    const [list, setList] = useState([])
    useEffect(async () => {
        const res = await axios.get(`${url}/feedback/${id}`, { headers: { Authorization: `Bearer ${authState.user.token}` } })
        setList(res.data)
    }, [id])
    return (
        <View style={{
            borderRadius: 5,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.26,
            backgroundColor: 'white',
        }}>
            <View style={{
                width: '95%',

            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
                    marginBottom: 5,
                }}>Đánh giá và nhận xét sản phẩm {Data}</Text>
            </View>
            <View style={{
                borderWidth: 1,
                borderColor: '#bbb',
                borderRadius: 5,
                flexDirection: 'row',
                width: '95%',
                justifyContent: 'space-between',
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700',
                    }}>{list.length != 0 ? list.total.average_score : 0}/5</Text>
                    <CountStar count={list.length != 0 ? list.total.average_score : 0} size={20} />
                    <Text>{list.length != 0 ? list.feedback.length : 0} đánh giá và nhận xét</Text>
                </View>
                <View style={{
                    padding: 5,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}>
                        <Text style={{
                            fontSize: 11,
                            width: 8,
                        }}>5</Text>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                            }}
                            source={
                                { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                            } />
                        <View style={{
                            width: '40%',
                            backgroundColor: '#bbb',
                            height: 6,
                            borderRadius: 10,
                        }}>
                            <View style={{

                                width: `${list.length != 0 ? list.total.ave5 : 0}%`,
                                backgroundColor: 'red',
                                height: 6,
                                borderRadius: 10,
                            }}>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 11,
                            width: 70,
                        }}>{list.length != 0 ? list.total.score_5 : 0} đánh giá</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}>
                        <Text style={{
                            fontSize: 11,
                            width: 8,
                        }}>4</Text>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                            }}
                            source={
                                { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                            } />
                        <View style={{
                            width: '40%',
                            backgroundColor: '#bbb',
                            height: 6,
                            borderRadius: 10,
                        }}>
                            <View style={{

                                width: `${list.length != 0 ? list.total.ave4 : 0}%`,
                                backgroundColor: 'red',
                                height: 6,
                                borderRadius: 10,
                            }}>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 11,
                            width: 70,
                        }}>{list.length != 0 ? list.total.score_4 : 0} đánh giá</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}>
                        <Text style={{
                            fontSize: 11,
                            width: 8,
                        }}>3</Text>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                            }}
                            source={
                                { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                            } />
                        <View style={{
                            width: '40%',
                            backgroundColor: '#bbb',
                            height: 6,
                            borderRadius: 10,
                        }}>
                            <View style={{

                                width: `${list.length != 0 ? list.total.ave3 : 0}%`,
                                backgroundColor: 'red',
                                height: 6,
                                borderRadius: 10,
                            }}>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 11,
                            width: 70,
                        }}>{list.length != 0 ? list.total.score_3 : 0} đánh giá</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}>
                        <Text style={{
                            fontSize: 11,
                            width: 8,
                        }}>2</Text>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                            }}
                            source={
                                { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                            } />
                        <View style={{
                            width: '40%',
                            backgroundColor: '#bbb',
                            height: 6,
                            borderRadius: 10,
                        }}>
                            <View style={{

                                width: `${list.length != 0 ? list.total.ave2 : 0}%`,
                                backgroundColor: 'red',
                                height: 6,
                                borderRadius: 10,
                            }}>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 11,
                            width: 70,
                        }}>{list.length != 0 ? list.total.score_2 : 0} đánh giá</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}>
                        <Text style={{
                            fontSize: 11,
                            width: 8,
                        }}>1</Text>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                            }}
                            source={
                                { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                            } />
                        <View style={{
                            width: '40%',
                            backgroundColor: '#bbb',
                            height: 6,
                            borderRadius: 10,
                        }}>
                            <View style={{

                                width: `${list.length != 0 ? list.total.ave1 : 0}%`,
                                backgroundColor: 'red',
                                height: 6,
                                borderRadius: 10,
                            }}>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 11,
                            width: 70,
                        }}>{list.length != 0 ? list.total.score_1 : 0} đánh giá</Text>
                    </View>
                </View>
            </View>
            <View style={{
                marginTop: 20,
                width: '100%',
                height: 1,
                backgroundColor: '#bbb',
            }}>

            </View>

            {list.length != 0 && list.feedback.map((item) => {
                return (
                    <View key={item.id} style={{
                        padding: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            height: 150,
                        }}>
                            <View style={{
                                height: '100%',
                                width: '10%',
                            }}>
                                <View style={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: '#bbb',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: '700',
                                    }}>
                                        {item.username[0]}
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                width: '90%',
                                flexDirection: 'column',
                            }}>
                                <View style={{
                                    height: 30,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: '700',
                                    }}>{item.username}</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Image
                                            style={{
                                                width: 15,
                                                height: 15,
                                                marginRight: 10,
                                            }}
                                            source={{
                                                uri: 'https://uxwing.com/wp-content/themes/uxwing/download/13-time-date/clock.png'
                                            }} />
                                        <Text>{item.FeedbackDay}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    marginTop: 10,
                                    backgroundColor: '#F0EEEE',
                                    borderRadius: 10,
                                    flexDirection: 'column',
                                    padding: 8,

                                }}>
                                    <View >
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <Text style={{
                                                fontWeight: '700',
                                                fontSize: 13,
                                            }}>
                                                Đánh giá:
                                            </Text>
                                            <CountStar count={item.Rate} size={15} />
                                        </View>
                                        <View style={{
                                            marginTop: 10,
                                        }}>

                                            <Text>
                                                <Text style={
                                                    {
                                                        fontSize: 13,
                                                        fontWeight: '700',
                                                    }
                                                }>
                                                    Nhận xét:
                                                </Text>
                                                {' '}{item.Comment}
                                            </Text>
                                        </View>
                                        <View style={{
                                            width: '100%',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            marginTop: 10,
                                        }}>
                                            <Image style={{
                                                width: 20,
                                                height: 20,
                                            }} source={{
                                                uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/fa314a/external-comment-chat-flatart-icons-outline-flatarticons-2.png'
                                            }} />
                                            <Text style={{
                                                fontSize: 15,
                                                color: 'red',
                                            }}>Bình luận</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                )
            })}
            {/* <View style={{
                width: '90%',
                borderWidth: 1,
                borderColor: '#A60D0D',
                borderRadius: 5,
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={
                    {
                        fontSize: 13,
                        color: '#A60D0D',
                        fontWeight: '700',
                    }
                }>XEM THÊM</Text>
            </View> */}
            <View style={{
                height: 30,
                backgroundColor: 'red',
            }}></View>
        </View>

    )
}
const styles = StyleSheet.create({
    Image: {
        marginLeft: 5,
        width: 20,
        height: 20,
    }
});
export default DanhGia