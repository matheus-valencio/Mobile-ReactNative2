import React, { useEffect, useState } from "react"; 
import { View, Text, TextInput, FlatList,TouchableOpacity } from "react-native"; 
import * as SQLite from 'expo-sqlite'; 

const db = SQLite.openDatabase("lista.db"); 

const App = () => { 
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(""); 
  const [lista, setLista] = useState([]); 

  const createTables = () => { 
    db.transaction(txn => { 
      txn.executeSql( 
        `CREATE TABLE IF NOT EXISTS lista (id INTEGER PRIMARY KEY AUTOINCREMENT, produto VARCHAR(20), quantidade INT)`, 
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

  const incluirProduto = () => { 

    if (!produto) { 
      alert("Informe um produto"); 
      return false; 
    }
    if (!quantidade) { 
      alert("Informe a quantidade"); 
      return false; 
    }  
    
    db.transaction(txn => { 
      txn.executeSql( 
        `INSERT INTO lista (produto, quantidade) VALUES (?, ?)`, 
        [produto, quantidade], 
        (sqlTxn, res) => { 
          console.log(`${produto} Produto adicionado com sucesso!`); 
          getLista(); 
          setLista("");
        }, 
        error => { 
          console.log("Erro ao inserir um Produto " + error.message); 
        }, 
      );
    }); 
  }; 

  const getLista = () => { 
    db.transaction(txn => { 
      txn.executeSql( 
        `SELECT * FROM lista ORDER BY id ASC`, 
        [], 
        (sqlTxn, res) => { 
          console.log("Lista lida com sucesso!"); 
          let len = res.rows.length; 
          if (len > 0) { 
            let results = []; 
            for (let i = 0; i < len; i++) { 
              let item = res.rows.item(i); 
              results.push({ id: item.id, produto: item.produto, quantidade:item.quantidade }); 
            } 
            setLista(results); 
          } 
        }, 
        error => { 
          console.log("Erro ao obter a Lista " + error.message); 
        }, 
      ); 
    }); 
  }; 
  excluir = (id)=>{
      db.transaction(txn => { 
      txn.executeSql( 
        `DELETE FROM lista WHERE id = ${id}`, 
        [], 
        (sqlTxn, res) => { 
          console.log(`${produto} Produto excluído com sucesso!`); 
          getLista();
          setLista("");
          setQuantidade('') ;
        }, 
        error => { 
          console.log("Erro ao excluir um produto " + id); 
        }, 
      );
    }); 
  }
 
  const renderLista = ({ item }) => { 
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
        <View style={{justifyContent: "space-between",flexDirection: "row",}}>
        <Text style={{ marginRight: 9, fontSize:22 }}>{item.produto}</Text> 
        <Text style={{ marginRight: 9, fontSize:22 }}>({item.quantidade})</Text> 
        </View>
        <TouchableOpacity   style={{backgroundColor:'red', width:30,height:30, alignItems:'center', marginLeft:20}} onPress={() => excluir(item.id)}> 
          <Text style={{color:'white', fontSize:22,fontWeight:'700'}}>X</Text> 
        </TouchableOpacity> 
      </View> 
    ); 
  }; 

  useEffect(async () => { 
    await createTables(); 
    await getLista(); 
  }, []); 

  return ( 
    <View> 
      <Text style={{color:'black', fontSize:30,fontWeight:'400',marginTop: 50,textAlign:'center'}}>Lista de Comprass</Text> 
      <View style={{flexDirection:'row',justifyContent:'center',padding:5}}>
        <TextInput 
          placeholder="Qt." 
          value={quantidade.replace(/[^0-9]/g, '')} 
          onChangeText={setQuantidade} 
          style={{ fontSize:22, marginTop: 45,borderColor:'black',borderWidth: 1,padding:5,width:100 }} 
        />
        <TextInput 
          placeholder="Nome do produto" 
          value={produto} 
          onChangeText={setProduto} 
          style={{ fontSize:22, marginTop: 45,borderColor:'black',borderWidth: 1,padding:5,flex:1 }} 
        /> 
        <TouchableOpacity   style={{backgroundColor:'green', width:40,height:40, alignItems:'center', marginTop: 45, marginLeft:20, borderRadius:50}} onPress={incluirProduto}> 
          <Text style={{color:'white', fontSize:28,fontWeight:'700'}}>+</Text> 
        </TouchableOpacity>
      </View>
      <FlatList 
        data={lista} 
        renderItem={renderLista} 
        key={t => t.id} 
      /> 
    </View> 
  ); 
}; 

 

export default App; 