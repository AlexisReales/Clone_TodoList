import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';
import Header from '../../components/Participant/Images/Header';

export default function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe', 'Já existe o participante cadastrado!')
        }
        //return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
        setParticipants(prevState => [...prevState, participantName]);

        //limpar o campo - precisa alterar no value do TextInput
        setParticipantName('');

    }
    
    function handleParticipantRemove(name: string){
        //return console.log(participants.filter(participant => participant !== name));
        
        
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);
        // console.warn(`Vc removeu o participante ${name}`);

    }

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Adiciene uma nova tarefa"
                placeholderTextColor="#6B6B6B"
                //onChangeText={text => setParticipantName(text)}//evento para quando alterar algo no componente
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}> +  </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />
    
        
        {/* <ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView> */}

        
       
      </View>
    )
  }
  