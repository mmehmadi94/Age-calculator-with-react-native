
 import React, {Component} from 'react';
 import {ScrollView,TextInput, Text, View} from 'react-native';
 import DatePicker from 'react-native-datepicker'
 // You have put {}
 import {Button} from './Button'
 import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

class Component1 extends Component {

constructor(props) {
    super(props);
    this.state = {
     text: '',
     birthDate: null,
     currentData:'',
     yearDiff: '',
     monthDiff: '',
     dayDiff: '',
   }
  }

  _onPressButton() {

  var birthDate = new Date(this.state.birthDate).getDate(); //Current Date  (day)
  var birthMonth = new Date(this.state.birthDate).getMonth() + 1; //Current Month
  var birthYear = new Date(this.state.birthDate).getFullYear(); //Current Year

  var currentDate = new Date().getDate(); //Current Date  (day)
  var currentMonth = new Date().getMonth() + 1; //Current Month
  var currentYear = new Date().getFullYear(); //Current Year

  this.setState({
    //Setting the value of the date time
    currentData:
      currentDate + '/' + currentMonth + '/' + currentYear,
  });

  this.setState({ yearDiff: Math.abs(currentYear - birthYear),
                  monthDiff: Math.abs(currentMonth - birthMonth),
                  dayDiff: Math.abs(currentDate - birthDate)});
      }

render(){
  return(
    <ScrollView >
    <View>
{/* react native mostly is used Flexbox */}
{/*View is a component A View is useful as a container for other components to help control style and layout */}
{/*  <Text>{this.state.name}</Text> */}
{/* source is an example of props */}
{/*   <Image source={pic} style={{width: 193, height: 110}}/> */}
{/* The component itself (TEXT) can use props that allow us reuse the component */}
{/*   <Text>Hello {this.props.name}!</Text>  */}
{/* Flexbox is designed to provide a consistent layout on different screen sizes.
  You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.
-  flexDirection controls the direction in which children of a node are laid out. ( row, column, row-reverse, column-revers)
-  flex will define how your items are going to “fill” over the available space along your main axis (flex: 1, flex: 3).*/}
{/* User inputs */}
        <Text> Date of Birth ? </Text>
          <DatePicker
              style={{width: 300, marginTop:10}}
              date={this.state.birthDate}
              mode="date"
              placeholder="select your birthdate"
              format="YYYY-MM-DD"
              maxDate="2019-8-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({birthDate: date})}}
                       />

  {/* Buttons */}
          <View style={{flex: 1, flexDirection: 'row' , marginTop:30}}>
              <View style={{flex: 1, height: 100}}>
              <Button title= "Calculate"  onPress={(e) => this._onPressButton(e)} />
              </View>
              <View style={{flex: 1, height: 100 }}>
              <Button title= "Clear" />
         </View>
          </View>


{/* Results*/}
            <Text> Your age is </Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 100, backgroundColor: 'skyblue', alignItems: 'center'}}>
                  <Text> Years </Text>
                    <Text> {this.state.yearDiff} </Text>
                </View>
                <View style={{flex: 1, height: 100, backgroundColor: 'powderblue', alignItems: 'center'}}>
                  <Text> Days </Text>
                  <Text>  {this.state.dayDiff} </Text>
                </View>
                <View style={{flex: 1, height: 100, backgroundColor: 'skyblue', alignItems: 'center'}}>
                  <Text> Months </Text>
                    <Text> {this.state.monthDiff} </Text>
                </View>
            </View>

    </View>
    </ScrollView>
    );
}
}
export default Component1;
