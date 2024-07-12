import { StyleSheet } from "react-native";

// Definindo as cores
export const colors = {
  primary: '#3498DB',        // Azul Claro (botões principais, destaques)
  secondary: '#2C3E50',      // Azul Marinho (botões secundários)
  background: '#E6F7FF',     // Azul Muito Claro (fundo)
  textPrimary: '#1a2733',    // Azul Marinho (texto principal)
  textSecondary: '#3498DB',  // Azul Claro (texto secundário)
  divider: '#BDBDBD',        // Cinza Claro (divisórias)
  accent: '#3498DB',         // Azul Claro (destaques)
  error: '#F44336',          // Vermelho (mensagens de erro)
  success: '#4CAF50',        // Verde (mensagens de sucesso)
  link: '#3498DB',           // Azul Claro (links)
  iconColorBotão: '#FEDA38',
  iconActive: '#3498DB',     // Cor para ícones ativos
  iconInactive: '#757575'    // Cor para ícones inativos

};


export const Styles = StyleSheet.create({

  // Estilos para títulos principais
  title: {
    fontSize: 26,                        // Tamanho da fonte
    textAlign: 'center',                 // Alinhamento do texto
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    marginVertical: 15,                  // Margem vertical
    marginBottom: 10,                    // Margem inferior para espaçamento da base
    marginTop: 15,                       // Margem superior para espaçamento do topo
  },

  // Estilos para subtítulos
  subtitle: {
    fontSize: 20,                        // Tamanho da fonte
    textAlign: 'center',
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    fontFamily: 'Arial, sans-serif',     // Fonte
    marginHorizontal: 15,                // Margem vertical
    marginTop: 10,                       // Margem superior para espaçamento do topo

  },

  // Estilos para legenda
  legend: {
    fontSize: 14,                        // Tamanho da fonte
    fontWeight: 'normal',                // Peso da fonte
    textAlign: 'center',                 // Alinhamento do texto
    color: colors.textPrimary,           // Cor do texto

  },

  // Estilos para botões principais
  buttonPrimary: {
    backgroundColor: colors.primary,     // Cor de fundo do botão
    color: colors.textPrimary,           // Cor do texto do botão
    marginVertical: 15,                  // Margem vertical distancia entre os botoes
    //  paddingVertical: 10,                 // Espaçamento vertical interno
    paddingHorizontal: 15,               // Espaçamento horizontal interno
    borderRadius: 18,                    // Raio da borda
    flexDirection: 'row',                // Direção dos itens (imagem e texto)
    alignItems: 'center',                // Alinhamento vertical dos itens
    justifyContent: 'flex-start',         // Alinha o conteúdo no centro horizontalmente
    height: 62,                          // Altura total do botão
    width: '75%',                        // Largura total do botão
    alignSelf: 'center',                 // Centraliza o botão horizontalmente

  },

  // Estilos para texto dentro dos botões principais
  buttonTextPrimary: {
    color: '#FFFFFF',                    // Cor do texto
    fontWeight: 'bold',                  // Peso da fonte
    fontSize: 22,                        // Tamanho da fonte
    marginLeft: 15,                      // Espaçamento à esquerda da imagem
    lineHeight: 28,                      // Altura da linha do texto

  },

  // Estilos para imagem
  ImagePremium: {
    width: 40,                           // Largura da imagem
    height: 40,                          // Altura da imagem
    marginTop: 2,                   // Margem superior para espaçamento do topo
    flexDirection: 'row',   // Direção dos itens na linha

  },

  // Novo estilo para A imagem ficar na frente da fraze
  premiumContainer: {
    flexDirection: 'row',   // Direção dos itens na linha
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15,
  },

});

export default Styles;
