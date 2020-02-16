package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Laptop;
import pl.tom.apiservice.model.LaptopRepository;

import java.util.Optional;


@Service
public class LaptopService {

    private LaptopRepository laptopRepository;

    public LaptopService(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    public Laptop save(Laptop laptop) {
        laptop.setLaptop_description(laptop.getLaptop_description().toLowerCase());
        return laptopRepository.save(laptop);
    }

    public Optional<Laptop> edit(Long id, Laptop laptopEdited) {
        Optional<Laptop> updateLaptop = laptopRepository.findById(id);

        if (updateLaptop.isPresent()) {
            updateLaptop.get().setLaptop_mark(laptopEdited.getLaptop_mark());
            updateLaptop.get().setLaptop_description(laptopEdited.getLaptop_description().toLowerCase());
            updateLaptop.get().setLaptop_price(laptopEdited.getLaptop_price());
            updateLaptop.get().setLaptop_status(laptopEdited.getLaptop_status());
            updateLaptop.get().setLaptop_system(laptopEdited.getLaptop_system());
            updateLaptop.get().setLaptop_processor(laptopEdited.getLaptop_processor());
            updateLaptop.get().setLaptop_ram_size(laptopEdited.getLaptop_ram_size());
            updateLaptop.get().setLaptop_disc_type(laptopEdited.getLaptop_disc_type());
            updateLaptop.get().setLaptop_disc_size(laptopEdited.getLaptop_disc_size());
            updateLaptop.get().setLaptop_graphics_card(laptopEdited.getLaptop_graphics_card());
            updateLaptop.get().setLaptop_screen_diagonal(laptopEdited.getLaptop_screen_diagonal());
            updateLaptop.get().setLaptop_amount_available(laptopEdited.getLaptop_amount_available());

            return updateLaptop = Optional.of(laptopRepository.save(updateLaptop.get()));

        } else {
            return updateLaptop;
        }
    }

    public void deleteById(Long id) {
        laptopRepository.deleteById(id);
    }
}
