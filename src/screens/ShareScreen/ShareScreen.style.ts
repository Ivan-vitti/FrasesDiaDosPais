import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Obtém a altura da tela

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
  contorno: '#000033',  // cor de contorno do texto
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
    textAlign: 'center', // Alinhamento horizontal centralizado
    marginHorizontal: 20, // Ajuste para garantir que o texto quebre em várias linhas
    lineHeight: 32,
    color: colors.textPrimary,
    marginBottom: 10,
    flexWrap: 'wrap', // Permite que o texto quebre em várias linhas

  },

  textContainer: {
    // Define a largura da caixa de texto
    width: '85%', // Ajuste a largura conforme necessário
    // Cria um espaço em volta do texto
    padding: 10,
    // Remove cor de fundo e borda
    backgroundColor: 'transparent', // Sem cor de fundo
    borderColor: 'transparent', // Sem borda
    // Alinha o conteúdo ao centro
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '95%', // Ajuste a largura da caixa
    alignSelf: 'center', // Centraliza a caixa horizontalmente
    height: height * 0.5, // Define a altura da caixa para 50% da altura da tela
    justifyContent: 'center', // Ajusta o conteúdo verticalmente
    margin: 10,
    padding: 10,
    alignItems: 'center', // Centraliza horizontalmente
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain', // Ajusta para contain para manter a proporção
  },

  image: {
    borderRadius: 20, // Aplica bordas arredondadas à imagem
  },
  // Estilos para botões principais
  buttonPrimary: {
    backgroundColor: colors.primary,     // Cor de fundo do botão
    color: colors.textPrimary,           // Cor do texto do botão
    marginVertical: 5,                   // Margem vertical distância entre os botões
    paddingHorizontal: 15,               // Espaçamento horizontal interno
    borderRadius: 15,                    // Raio da borda
    flexDirection: 'row',                // Direção dos itens (imagem e texto)
    alignItems: 'center',                // Alinhamento vertical dos itens
    justifyContent: 'flex-start',        // Alinha o conteúdo no início horizontalmente
    height: 48,                          // Altura total do botão
    width: '80%',                        // Largura total do botão
    alignSelf: 'center',                 // Centraliza o botão horizontalmente
    marginTop: 12,                       // Margem superior para espaçamento do topo
  },

  // Estilos para texto dentro dos botões principais
  buttonTextPrimary: {
    color: colors.iconColorBotão,        // Cor do texto
    fontWeight: 'bold',                  // Peso da fonte
    fontSize: 22,                        // Tamanho da fonte
    marginLeft: 15,                      // Espaçamento à esquerda da imagem
    lineHeight: 25,                      // Altura da linha do texto
    textShadowColor: colors.contorno,    // Cor da sombra
    textShadowOffset: { width: 2, height: 1.5 }, // Offset da sombra
    textShadowRadius: 2,                 // Raio da sombra
  },

  bannerContainer: {
    position: 'absolute', // Posiciona o banner de forma absoluta
    bottom: 0,            // Posiciona o banner na base da tela
    width: '100%',        // Largura completa da tela
    alignItems: 'center', // Centraliza o banner horizontalmente
    backgroundColor: colors.background, // Cor de fundo para evitar sobreposição de conteúdo
  },

  // Estilos para a tela de edição
  container: {
    flex: 1,
    padding: 0, // Se necessário, ajuste o padding
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
});

export default Styles;
