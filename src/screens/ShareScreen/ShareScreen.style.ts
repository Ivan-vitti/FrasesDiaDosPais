import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window'); // Obtém a altura e largura da tela

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
  contorno: '#000033',       // Cor de contorno do texto
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
    fontSize: 25,
    textAlign: 'center', // Alinhamento horizontal centralizado
    marginHorizontal: 20, // Ajuste para garantir que o texto quebre em várias linhas
    lineHeight: 32,
    color: colors.textPrimary,
    marginBottom: 10,
    flexWrap: 'wrap', // Permite que o texto quebre em várias linhas

  },

  textContainer: {
    flex: 1,
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

  textContainer01: {
    flex: 1,
    padding: 10, // Espaço em volta do texto
    backgroundColor: 'transparent', // Sem cor de fundo
    borderColor: 'transparent', // Sem borda
    alignItems: 'center', // Alinha horizontalmente ao centro
    justifyContent: 'center', // Alinha verticalmente ao centro
    textAlign: 'center', // Centraliza o texto
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
    width: '98%', // Largura total
    height: height * 0.5, // Altura da caixa para 50% da altura da tela
    alignSelf: 'center',
    justifyContent: 'flex-start', // Alinha o conteúdo para o topo
    padding: 0, // Remove padding
    backgroundColor: colors.background,
    overflow: 'hidden', // Evita que o conteúdo saia da caixa
  },

  boxPhrase01: {
    width: '98%', // Largura quase total
    height: height * 0.5, // Altura da caixa para 50% da altura da tela
    alignSelf: 'center', // Centraliza a caixa horizontalmente
    justifyContent: 'center', // Alinha o conteúdo verticalmente no centro
    padding: 0, // Remove padding
    overflow: 'hidden', // Evita que o conteúdo saia da caixa
},

  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },


  image: {
    borderRadius: 10, // Aplica bordas arredondadas à imagem
    resizeMode: 'contain', // Mude para 'contain' se quiser que a imagem se ajuste sem cortar
    width: '100%',
    height: '100%',
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
    marginTop: 10,                       // Margem superior para espaçamento do topo
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
    justifyContent: 'center',

  },

  input: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    margin: 10,
  },
  saveButton: {
    backgroundColor: '#3498DB',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Estilos para modal
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,  // Adiciona preenchimento para espaçamento interno
  },

  imageGalleryItem: {
    width: '48%', // Ajuste para duas imagens por coluna
    height: 200,  // Ajuste conforme necessário
    margin: 5,
  },

  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignSelf: 'center',  // Centraliza o botão
  },

  closeButtonText: {
    color: colors.iconColorBotão,
    fontWeight: 'bold',
    fontSize: 18,
  },

  galleryContainer: {
    flex: 1,
    width: '100%',  // Largura completa da galeria
  },




});

export default Styles;
