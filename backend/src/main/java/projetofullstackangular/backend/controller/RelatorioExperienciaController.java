package projetofullstackangular.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import projetofullstackangular.backend.model.RelatorioExperiencia;
import projetofullstackangular.backend.service.RelatorioExperienciaService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/relatorios")
@CrossOrigin(origins = "http://localhost:4200") // Permitir acesso do frontend
public class RelatorioExperienciaController {

    private final RelatorioExperienciaService service;

    public RelatorioExperienciaController(RelatorioExperienciaService service) {
        this.service = service;
    }

    @GetMapping
    public List<RelatorioExperiencia> listarTodos() {
        return service.listarRelatorios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RelatorioExperiencia> obterPorId(@PathVariable Long id) {
        Optional<RelatorioExperiencia> relatorio = service.obterPorId(id);
        return relatorio.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public RelatorioExperiencia criar(@RequestBody RelatorioExperiencia relatorio) {
        return service.criarOuAtualizarRelatorio(relatorio);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RelatorioExperiencia> atualizar(@PathVariable Long id, @RequestBody RelatorioExperiencia relatorio) {
        if (!service.obterPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        relatorio.setId(id);
        return ResponseEntity.ok(service.criarOuAtualizarRelatorio(relatorio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!service.obterPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        service.deletarRelatorio(id);
        return ResponseEntity.noContent().build();
    }
}
