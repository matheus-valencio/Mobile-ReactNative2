import React, { useEffect, useState } from "react"; 
import { View, Text, TextInput, FlatList, CheckBox,TouchableOpacity } from "react-native"; 
import * as SQLite from 'expo-sqlite'; 

const db = SQLite.openDatabase("tarefas.db"); 

const App = () => { 
  const [tarefa, setTarefa] = useState(""); 
  const [tarefas, setTarefas] = useState([]); 
  //const [isSelected, setSelection] = useState(true);
  //Professor, eu ia usar o checkbox, mas não consegui fazer funcionar de jeito nenhum..
  const createTables = () => { 
    db.transaction(txn => { 
      txn.executeSql( 
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), concluida BIT)`, 
        [], 
        (sqlTxn, res) => { 
          console.log("Tabela criada com sucesso!!"); 
        }, 
        error => { 
          console.log("error on creating table " + error.message); 
        }, 
      ); 
    }); 
  }; 

  const incluirTarefa = () => { 

    if (!tarefa) { 
      alert("Informe uma tarefa"); 
      return false; 
    } 
    db.transaction(txn => { 
      txn.executeSql( 
        `INSERT INTO tarefas (nome, concluida) VALUES (?, 0)`, 
        [tarefa], 
        (sqlTxn, res) => { 
          console.log(`${tarefa} Tarefa adicionada com sucesso!`); 
          getTarefas(); 
          setTarefa("");
        }, 
        error => { 
          console.log("Erro ao inserir uma Tarefa " + error.message); 
        }, 
      );
    }); 
  }; 

  const getTarefas = () => { 
    db.transaction(txn => { 
      txn.executeSql( 
        `SELECT * FROM tarefas ORDER BY id ASC`, 
        [], 
        (sqlTxn, res) => { 
          console.log("Tarefas lidas com sucesso!"); 
          let len = res.rows.length; 
          if (len > 0) { 
            let results = []; 
            for (let i = 0; i < len; i++) { 
              let item = res.rows.item(i); 
              results.push({ id: item.id, nome: item.nome, concluida: 1 }); 
            } 
            setTarefas(results); 
          } 
        }, 
        error => { 
          console.log("Erro ao obter Tarefas " + error.message); 
        }, 
      ); 
    }); 
  }; 
  excluir = (id)=>{
      db.transaction(txn => { 
      txn.executeSql( 
        `DELETE FROM tarefas WHERE id = ${id}`, 
        [], 
        (sqlTxn, res) => { 
          console.log(`${tarefa} Tarefa EXCLUÍDA com sucesso!`); 
          getTarefas();
          setTarefas(""); 
        }, 
        error => { 
          console.log("Erro ao excluir uma Tarefa " + id); 
        }, 
      );
    }); 
  }
 
  const renderTarefa = ({ item }) => { 
    return ( 
      <View style={{ 
        flexDirection: "row", 
        paddingVertical: 12, 
        paddingHorizontal: 10, 
        borderBottomWidth: 1, 
        borderColor: "#ddd", 
        flex:1,
        justifyContent: "space-between",
      }}> 
        <Text style={{ marginRight: 9, fontSize:22 }}>{item.id + " -"}</Text> 
        <Text style={{ marginRight: 9, fontSize:22 }}>{item.nome}</Text> 
        <TouchableOpacity   style={{backgroundColor:'red', width:30,height:30, alignItems:'center', marginLeft:20}} onPress={() => excluir(item.id)}> 
          <Text style={{color:'white', fontSize:22,fontWeight:'700'}}>X</Text> 
        </TouchableOpacity> 
      </View> 
    ); 
  }; 

  useEffect(async () => { 
    await createTables(); 
    await getTarefas(); 
  }, []); 

  return ( 
    <View> 
      <Text style={{color:'black', fontSize:30,fontWeight:'400',marginTop: 50,textAlign:'center'}}>Tarefas</Text> 
      <View style={{flexDirection:'row',justifyContent:'center',padding:5}}>
        <TextInput 
          placeholder="Informe uma tarefa" 
          value={tarefa} 
          onChangeText={setTarefa} 
          style={{ fontSize:22, marginTop: 45,borderColor:'black',borderWidth: 1,padding:5,flex:1 }} 
        /> 
        <TouchableOpacity   style={{backgroundColor:'green', width:40,height:40, alignItems:'center', marginTop: 45, marginLeft:20, borderRadius:50}} onPress={incluirTarefa}> 
          <Text style={{color:'white', fontSize:28,fontWeight:'700'}}>+</Text> 
        </TouchableOpacity>
      </View>
      <FlatList 
        data={tarefas} 
        renderItem={renderTarefa} 
        key={t => t.id} 
      /> 
    </View> 
  ); 
}; 

 

export default App; 