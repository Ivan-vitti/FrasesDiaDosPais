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
  iconActive: '#3498DB',     // Cor para ícones ativos
  iconInactive: '#757575',   // Cor para ícones inativos
  iconColorBotão: '#FFFFFF', // Cor do ícone do botão
  contorno: '#000033',        // cor de contorno do texto
};

export const Styles = StyleSheet.create({

  // Estilos para títulos principais
  title: {
    fontSize: 26,                        // Tamanho da fonte
    textAlign: 'center',                 // Alinhamento do texto
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    marginVertical: 15,                  // Margem vertical
  },

  // Estilos para subtítulos
  subtitle: {
    fontSize: 20,                        // Tamanho da fonte
    textAlign: 'center',                 // Alinhamento do texto
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    fontFamily: 'Arial',                 // Fonte
    marginHorizontal: 15,                // Margem horizontal
    marginTop: 10,                       // Margem superior
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
    marginVertical: 15,                  // Margem vertical
    paddingVertical: 10,                 // Espaçamento vertical interno
    paddingHorizontal: 15,               // Espaçamento horizontal interno
    borderRadius: 18,                    // Raio da borda
    flexDirection: 'row',                // Direção dos itens (imagem e texto)
    alignItems: 'center',                // Alinhamento vertical dos itens
    justifyContent: 'flex-start',            // Alinhamento horizontal dos itens
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
    textShadowColor: colors.contorno,   // Cor da sombra
    textShadowOffset: { width: 2, height: 1.5 }, // Offset da sombra
    textShadowRadius: 2,                 // Raio da sombra
  },

  // Estilos para imagem
  ImagePremium: {
    width: 40,                           // Largura da imagem
    height: 40,                          // Altura da imagem
    marginTop: 2,                        // Margem superior
  },

  // Novo estilo para a imagem ficar na frente da frase
  premiumContainer: {
    flexDirection: 'row',   // Direção dos itens na linha
    marginHorizontal: 25,   // Margem horizontal
    marginBottom: 15,       // Margem inferior
    alignItems: 'center',   // Alinhamento vertical dos itens
  },

});

export default Styles;
