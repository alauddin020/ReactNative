import React from 'react';
import { StyleSheet,View,ScrollView } from 'react-native';
import { List,Card,Appbar } from 'react-native-paper';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((responseJson)=> {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error=>console.log(error)) //to catch the errors if any
    }
    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content
                        title="Title"
                    />
                </Appbar.Header>
                <ScrollView>
                    {this.state.dataSource.map((data, key) =>
                        <Card key={key} style={{margin:10}}>
                            <List.Item
                                title={data.title}
                                description={data.body}
                                left={props => <List.Icon {...props} icon="folder" />}
                            />
                        </Card>
                    )}
                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});
