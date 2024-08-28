import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Definição das cores do aplicativo
export const colors = {
  primary: '#3498DB',        // Azul Claro (botões principais, destaques)
  secondary: '#2C3E50',      // Azul Marinho (botões secundários)
  background: '#E6F7FF',     // Azul Muito Claro (fundo)
  textPrimary: '#1a2733',    // Azul Marinho (texto principal)
  textSecondary: '#3498DB',  // Azul Claro (texto secundário)
  accent: '#3498DB',         // Azul Claro (destaques)
  iconActive: '#3498DB',     // Cor para ícones ativos
  iconInactive: '#757575',   // Cor para ícones inativos
  iconColorBotão: '#FFFFFF', // Cor para ícones de botões
  iconActive02: '#9dd6fc',   // Cor para ícones ativos
  selectedBackground: '#c0e6ff',  // Adicione esta linha
 
};

// Criação dos estilos utilizando StyleSheet do React Native
const Styles = StyleSheet.create({
  FundoBackground: {
    flex: 1, // O modal ocupa todo o espaço disponível
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    backgroundColor: 'rgba(0, 0, 0, 0. 5)', // Fundo escuro semi-transparente para o modal
  },
  Container: {
    width: '80%', // Largura do modal em 90% da tela
    height: '70%', // Altura do modal em 60% da tela
    backgroundColor: colors.background, // Cor de fundo do modal definida pelas cores do aplicativo
    borderRadius: 25, // Bordas arredondadas do modal
    padding: 15, // Espaçamento interno do modal
    alignItems: 'center', // Alinhamento do conteúdo no centro
  },
  Title: {
    fontSize: 22, // Tamanho da fonte do título do modal
    fontWeight: 'bold', // Estilo da fonte em negrito
    color: colors.textPrimary, // Cor do texto do título definida pelas cores do aplicativo
    marginVertical: 15, // Margem vertical para espaçamento acima e abaixo do título
  },
  DireçãoRow: {
    flexDirection: 'row', // Define a direção dos itens como horizontal
    justifyContent: 'space-around', // Distribui os itens igualmente ao longo da linha
    width: '100%', // Largura da linha ocupando 100% do espaço
    marginVertical: 10, // Margem vertical para espaçamento acima e abaixo da linha
  },
  modalButton: {
    alignItems: 'center', // Centraliza os itens dentro do botão
  },
  FecharButton: {
    marginTop: 20, // Margem superior para espaçamento acima do botão de fechar
    flexDirection: 'row', // Define a direção dos itens como horizontal
    alignItems: 'center', // Centraliza os itens dentro do botão de fechar
    color: colors.secondary, // Cor do texto ou ícone do botão de fechar
  },
  subtitle: {
    fontSize: 16,                        // Tamanho da fonte
    textAlign: 'left',
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    fontFamily: 'Arial, sans-serif',     // Fonte
    marginHorizontal: 15,                // Margem vertical
    marginTop: 5,                       // Margem superior para espaçamento do topo
    marginBottom: 15,                    // Margem inferior para espaçamento do texto abaixo
  },
  iconStyle: {
    fontSize: 35,            // Tamanho do ícone
    color: colors.iconActive, // Cor do ícone
  },

  iconImage: {
    width: 40,  // Largura da imagem
    height: 40, // Altura da imagem
    marginHorizontal: 10,
  },
  //-----------------------------------------------------------------tela para escolher imagem interna do cell
  Column: {
    flex: 1, // Permite que as colunas ocupem espaço igual
    alignItems: 'center', // Centraliza o conteúdo dentro da coluna
  },
  iconLabel: {
    marginTop: 5, // Espaçamento acima da legenda
    textAlign: 'center', // Centraliza a legenda
  },
  // Estilo apra a tela EditPhrase
  textInput: {
    height: 180, // Aumenta a altura do TextInput
    borderColor: colors.secondary, // Cor da borda usando a cor secundária
    borderWidth: 2, // Espessura da borda
    borderRadius: 10, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    marginTop: 10, // Espaçamento superior
    width: '100%', // Largura total
    fontSize: 16, // Tamanho da fonte
    color: colors.textPrimary, // Cor do texto
    backgroundColor: colors.background, // Cor de fundo do TextInput
    textAlignVertical: 'top', // Alinha o texto no topo
  },

  buttonContainer: {
    flexDirection: 'row', // Coloca os botões em linha
    justifyContent: 'space-between', // Espaça igualmente os botões
    width: '70%', // Ocupa toda a largura disponível
    marginTop: 20, // Espaçamento superior
  },


});

// Exporta os estilos para serem utilizados em outros componentes
export default Styles;
