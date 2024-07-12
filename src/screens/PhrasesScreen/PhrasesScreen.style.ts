import { StyleSheet } from 'react-native';

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

};

// Definindo os estilos globais
export const Styles = StyleSheet.create({

  // Estilos para títulos principais
  title: {
    fontSize: 26,                        // Tamanho da fonte
    textAlign: 'auto',                 // Alinhamento do texto
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    //  marginVertical: 15,                  // Margem vertical
    //   marginBottom: 10,                    // Margem inferior para espaçamento da base
    //    marginTop: 15,                       // Margem superior para espaçamento do topo
  },

  // Estilos para subtítulos
  subtitle: {
    fontSize: 20,                        // Tamanho da fonte
    textAlign: 'left',
    fontWeight: 'bold',                  // Peso da fonte
    color: colors.textPrimary,           // Cor do texto
    fontFamily: 'Arial, sans-serif',     // Fonte
    marginHorizontal: 15,                // Margem vertical
    marginTop: 5,                       // Margem superior para espaçamento do topo
    marginBottom: 15,                    // Margem inferior para espaçamento do texto abaixo

  },

  // Estilos para texto regular
  text: {
    flex: 1,
    fontFamily: 'Helvetica, Arial, sans-serif', // Fonte com fallback
    fontSize: 18,                               // Tamanho da fonte
    textAlign: 'justify',
    marginHorizontal: 20,                        // Margem horizontal para espaçamento dos lados
    lineHeight: 21,                             // Altura da linha
    color: colors.textPrimary,                   // Cor do texto
    //   marginBottom: 15,                           // Margem inferior para espaçamento da base
    //   marginTop: 5,                               // Margem superior para espaçamento do texto anterior

  },

  // Estilos para legenda
  legend: {
    fontSize: 14,                        // Tamanho da fonte
    fontWeight: 'normal',                // Peso da fonte
    textAlign: 'center',                 // Alinhamento do texto
    color: colors.textPrimary,       // Cor do texto

  },

  boxPhrase: {
    flex: 1,
    flexDirection: 'row',                // Direção dos itens (imagem e texto)
    borderColor: colors.accent,
    borderWidth: 1.5,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
  },
});

export default Styles;
