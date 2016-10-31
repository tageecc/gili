import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    ListView
} from 'react-native';

export default class SearchModule extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    fetchDate = (page = 2)=> {
        fetch('https://api.github.com/search/users?q=' + this.state.key + '&page=' + page)
            .then((res)=>res.json())
            .then((resText)=> {
                console.log(resText);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resText.items),
                    loaded: true
                })
            })
            .catch((err)=> {
                console.log(err)
            });
    };
    _renderRow = (rowData, sectionID, rowID)=> {
        return <TouchableOpacity>
            <View style={styles.searchResultItem}>
                <Text style={styles.searchResultItemText}>{rowData.login}</Text>
                <Image style={styles.searchResultItemAvatar}
                       source={{uri: rowData.avatar_url}}/>
            </View>
        </TouchableOpacity>
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.searchInputs}
                               returnKeyType="search"
                               placeholder="请输入搜索关键字"
                               onChangeText={(key) =>this.setState({key})}
                               value={this.state.key} />
                    <TouchableOpacity style={styles.searchBtn}>
                        <Text style={styles.searchBtnText} onPress={this.fetchDate}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <ListView style={styles.searchResult}
                          enableEmptySections={true}
                          dataSource={this.state.dataSource}
                          renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    searchBar: {
        height: 45,
        flexDirection: 'row',
    },
    searchInputs: {
        flex: 1,
        height: 45,
        paddingLeft: 5,
        borderRadius: 4,
        color: '#0066cc',
        borderColor: '#0066cc'
    },
    searchBtn: {
        width: 55,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: '#23bfff',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    searchBtnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    searchResult: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,

    },
    searchResultItem: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row-reverse',
    },
    searchResultItemText: {
        marginTop: 10,
        flex: 1
    },
    searchResultItemAvatar: {
        width: 30,
        height: 30,
        margin: 5
    }
});