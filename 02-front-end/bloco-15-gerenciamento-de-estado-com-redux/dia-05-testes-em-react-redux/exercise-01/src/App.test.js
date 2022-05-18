import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from './helpers/renderWithRedux';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import App from './App';
import FormDataDisplay from './pages/FormDataDisplay';
import userEvent from '@testing-library/user-event';

describe('Testes para avaliar comportamento do formulário com renderWithRouterAndRedux', () => {
  it('renderização do App sem nenhum dado no store', () => {
    renderWithRouterAndRedux(<App />);
  
    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).toBeInTheDocument();
  });

  it('renderização do FormDataDisplay a partir do App sem nenhum dado no store', () => {
    renderWithRouterAndRedux(<FormDataDisplay />);

    const title = screen.getByRole('heading', { name: /dados enviados/i, level: 2 });
    expect(title).toBeInTheDocument();

    const stringsForm = [
      /Guilherme Fernandes/i,
      /test@test.com/i,
      /12345678910/i,
      /Rua teste/i, 
      /Belo Horizonte/i,
      /Minas Gerais/i,
      /Engenheiro Químico/i, 
      /Futuro Dev/i,
      /Estudante da Trybe/i,
    ];

    stringsForm.forEach((string) => {
      const stringElement = screen.queryByText(string);
      expect(stringElement).not.toBeInTheDocument();
    });
  });
  
  it('renderização do FormDataDisplay com os dados', () => {
    renderWithRouterAndRedux(
      <FormDataDisplay />, 
      {
        initialState: { 
          reducer: {
            personalForms: {
              nome: 'Guilherme Fernandes',
              email: 'test@test.com',
              cpf: '12345678910',
              endereco: 'Rua teste', 
              cidade: 'Belo Horizonte',
              estado: 'Minas Gerais',
            },
            profissionalForms: {
              curriculo: 'Engenheiro Químico', 
              cargo: 'Futuro Dev',
              descricao: 'Estudante da Trybe',
            },
          }
        }
      }
    );

    const title = screen.getByRole('heading', { name: /dados enviados/i, level: 2 });
    expect(title).toBeInTheDocument();

    const stringsForm = [
      /Guilherme Fernandes/i,
      /test@test.com/i,
      /12345678910/i,
      /Rua teste/i, 
      /Belo Horizonte/i,
      /Minas Gerais/i,
      /Engenheiro Químico/i, 
      /Futuro Dev/i,
      /Estudante da Trybe/i,
    ];

    stringsForm.forEach((string) => {
      const stringElement = screen.getByText(string);
      expect(stringElement).toBeInTheDocument();
    });
  });
});

describe('Testes para avaliar comportamento do formulário que verifica', () => {
  it('existe todos os inputs no componente PersonalForm', () => {
    renderWithRedux(<PersonalForm />);
   
    const labelsPessoalArray = [
      /nome:/i, 
      /email:/i, 
      /cpf:/i, 
      /endereco:/i, 
      /cidade:/i, 
    ];

    labelsPessoalArray.forEach((label) => {
      const inputElement = screen.getByRole('textbox', { name: label });
      expect(inputElement).toBeInTheDocument();
    });

    const selectElement = screen.getByRole('combobox', { name: /estado:/i });
    expect(selectElement).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).toBeInTheDocument();
  });

  it('existe todos os inputs no componente ProfessionalForm', () => {
    renderWithRedux(<ProfessionalForm />);
    
    const inputResumo = screen.getByTestId('resumo-curriculo');
    expect(inputResumo).toBeInTheDocument();

    const inputCargo = screen.getByRole('textbox', { name: "Cargo:" });
    expect(inputCargo).toBeInTheDocument();

    const inputDescricao = screen.getByTestId('descricao');
    expect(inputDescricao).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).toBeInTheDocument();
  });

  it('se os valores do store são renderizados no componente FormDataDisplay', () => {
    renderWithRedux(<FormDataDisplay />, {
      initialState: { 
        reducer: {
          personalForms: {
            nome: 'Guilherme Fernandes',
            email: 'test@test.com',
            cpf: '12345678910',
            endereco: 'Rua teste', 
            cidade: 'Belo Horizonte',
            estado: 'Minas Gerais',
          },
          profissionalForms: {
            curriculo: 'Engenheiro Químico', 
            cargo: 'Futuro Dev',
            descricao: 'Estudante da Trybe',
          },
        }
      }
    });

    const stringsForm = [
      /Guilherme Fernandes/i,
      /test@test.com/i,
      /12345678910/i,
      /Rua teste/i, 
      /Belo Horizonte/i,
      /Minas Gerais/i,
      /Engenheiro Químico/i, 
      /Futuro Dev/i,
      /Estudante da Trybe/i,
    ];

    stringsForm.forEach((string) => {
      const stringElement = screen.getByText(string);
      expect(stringElement).toBeInTheDocument();
    });
  });

  it('avaliar as rotas presentes na aplicação', () => {
    renderWithRedux(<App />);

    // Primeira página do formulário
    const labelsPessoalArray = [
      { label: /nome:/i, text: 'Guilherme Fernandes' },
      { label: /email:/i, text: 'test@test.com' },
      { label: /cpf:/i, text: '12345678910' }, 
      { label: /endereco:/i, text: 'Rua teste' }, 
      { label: /cidade:/i, text: 'Belo Horizonte' }, 
    ];

    labelsPessoalArray.forEach(({ label, text }) => {
      const inputElement = screen.getByRole('textbox', { name: label });
      userEvent.type(inputElement, text)
    });

    const selectElement = screen.getByRole('combobox', { name: /estado:/i });
    userEvent.selectOptions(selectElement, 'Minas Gerais');

    const button1 = screen.getByRole('button', { name: /enviar/i });
    userEvent.click(button1);
    
    // Segunda página do formulário
    const inputResumo = screen.getByTestId('resumo-curriculo');
    userEvent.type(inputResumo, 'Engenheiro Químico');

    const inputCargo = screen.getByRole('textbox', { name: "Cargo:" });
    userEvent.type(inputCargo, 'Futuro Dev');

    const inputDescricao = screen.getByTestId('descricao');
    userEvent.type(inputDescricao, 'Estudante da Trybe');

    const button2 = screen.getByRole('button', { name: /enviar/i });
    userEvent.click(button2);

    // Terceira página do formulário
    const title = screen.getByRole('heading', { name: /dados enviados/i, level: 2 });
    expect(title).toBeInTheDocument();

    const stringsForm = [
      /Guilherme Fernandes/i,
      /test@test.com/i,
      /12345678910/i,
      /Rua teste/i, 
      /Belo Horizonte/i,
      /Minas Gerais/i,
      /Engenheiro Químico/i, 
      /Futuro Dev/i,
      /Estudante da Trybe/i,
    ];

    stringsForm.forEach((string) => {
      const stringElement = screen.getByText(string);
      expect(stringElement).toBeInTheDocument();
    });
  });
});


