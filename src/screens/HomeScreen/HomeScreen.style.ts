import { StyleSheet } from 'react-native';

// Definindo as cores
export const colors = {
  primary: '#3498DB',        // Azul Claro (botões principais, destaques)
  secondary: '#2C3E50',      // Azul Marinho (botões secundários)
  background: '#E6F7FF',     // Azul Muito Claro (fundo)
  textPrimary: '#1a2733',    // Azul Marinho (texto principal)
  textSecondary: '#3498DB',  // Azul Claro (texto secundário)
  accent: '#3498DB',         // Azul Claro (destaques)
  iconActive: '#3498DB',     // Cor para ícones ativos
  iconInactive: '#757575',   // Cor para ícones inativos
  iconColorBotão: '#FFFFFF',

};

// Definindo os estilos globais
export const Styles = StyleSheet.create({

  // Estilos para títulos principais
  title: {
    fontSize: 28,                        // Tamanho da fonte
    textAlign: 'center',                 // Alinhamento do texto
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    marginVertical: 15,                  // Margem vertical
    marginBottom: 10,                    // Margem inferior para espaçamento da base
    marginTop: 10,                       // Margem superior para espaçamento do topo
  },

  // Estilos para Subtitulos 
  subtitle: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'justify',
    marginHorizontal: 10,
    lineHeight: 32,
    color: colors.textPrimary,
    marginBottom: 10,
    flexWrap: 'wrap', // Permite que o texto quebre em várias linhas
  },


  // Estilos para texto regular
  text: {
    fontSize: 18,                                // Tamanho da fonte
    textAlign: 'justify',
    marginHorizontal: 20,                        // Margem horizontal para espaçamento dos lados
    lineHeight: 22,                              // Altura da linha
    color: colors.textPrimary,                   // Cor do texto
    marginBottom: 5,                             // Margem inferior para espaçamento da base
    marginTop: 5,                                // Margem superior para espaçamento do texto anterior
  },

  boxPhrase: {
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: colors.accent,
    borderWidth: 2,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    flexWrap: 'wrap', // Permite que o texto quebre em várias linhas
    minHeight: 60, // Altura mínima para garantir que a caixa não seja muito pequena
  },

  // Estilos para botões principais
  buttonPrimary: {
    backgroundColor: colors.primary,     // Cor de fundo do botão
    color: colors.textPrimary,           // Cor do texto do botão
    marginVertical: 15,                  // Margem vertical distancia entre os botoes
    paddingHorizontal: 15,               // Espaçamento horizontal interno
    borderRadius: 18,                    // Raio da borda
    flexDirection: 'row',                // Direção dos itens (imagem e texto)
    alignItems: 'center',                // Alinhamento vertical dos itens
    justifyContent: 'flex-start',         // Alinha o conteúdo no centro horizontalmente
    height: 62,                          // Altura total do botão
    width: '75%',                        // Largura total do botão
    alignSelf: 'center',                 // Centraliza o botão horizontalmente
    marginTop: 30,                       // Margem superior para espaçamento do topo

  },

  // Estilos para texto dentro dos botões principais
  buttonTextPrimary: {
    color: colors.iconColorBotão,        // Cor do texto
    fontWeight: 'bold',                  // Peso da fonte
    fontSize: 26,                        // Tamanho da fonte
    marginLeft: 25,                      // Espaçamento à esquerda da imagem
    lineHeight: 30,                      // Altura da linha do texto

  },
  bannerContainer: {
    position: 'absolute', // Posiciona o banner de forma absoluta
    bottom: 0, // Posiciona o banner na base da tela
    width: '100%', // Largura completa da tela
    alignItems: 'center', // Centraliza o banner horizontalmente
    backgroundColor: colors.background, // Cor de fundo para evitar sobreposição de conteúdo
},

});

export default Styles;
