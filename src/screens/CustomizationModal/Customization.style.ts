import { StyleSheet } from 'react-native';

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
};

// Criação dos estilos utilizando StyleSheet do React Native
const Styles = StyleSheet.create({
  FundoBackground: {
    flex: 1, // O modal ocupa todo o espaço disponível
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente para o modal
  },
  Container: {
    width: '90%', // Largura do modal em 90% da tela
    backgroundColor: colors.background, // Cor de fundo do modal definida pelas cores do aplicativo
    borderRadius: 15, // Bordas arredondadas do modal
    padding: 20, // Espaçamento interno do modal
    alignItems: 'center', // Alinhamento do conteúdo no centro
  },
  Title: {
    fontSize: 24, // Tamanho da fonte do título do modal
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
    fontSize: 18,                        // Tamanho da fonte
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


});

// Exporta os estilos para serem utilizados em outros componentes
export default Styles;
