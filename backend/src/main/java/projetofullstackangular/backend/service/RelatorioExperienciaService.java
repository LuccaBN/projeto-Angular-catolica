package projetofullstackangular.backend.service;

import org.springframework.stereotype.Service;

import projetofullstackangular.backend.model.RelatorioExperiencia;
import projetofullstackangular.backend.repository.RelatorioExperienciaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RelatorioExperienciaService {

    private final RelatorioExperienciaRepository repository;

    public RelatorioExperienciaService(RelatorioExperienciaRepository repository) {
        this.repository = repository;
    }

    public List<RelatorioExperiencia> listarRelatorios() {
        return repository.findAll();
    }

    public Optional<RelatorioExperiencia> obterPorId(Long id) {
        return repository.findById(id);
    }

    public RelatorioExperiencia criarOuAtualizarRelatorio(RelatorioExperiencia relatorio) {
        return repository.save(relatorio);
    }

    public void deletarRelatorio(Long id) {
        repository.deleteById(id);
    }
}
