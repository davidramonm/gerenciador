package money.manager.repository.activity;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.dao.OptimisticLockingFailureException;

import jakarta.persistence.PersistenceException;
import money.manager.domain.activity.Activity;
import money.manager.domain.gateway.ActivityGateway;
import money.manager.repository.activity.jpa.ActivityJpaEntity;
import money.manager.repository.activity.jpa.ActivityJpaRepository;

public class ActivityJpaGateway implements ActivityGateway {

    private ActivityJpaRepository activityJpaRepository;

    private ActivityJpaGateway(final ActivityJpaRepository aRepository) {
        this.activityJpaRepository = aRepository;
    }

    public static ActivityGateway build(final ActivityJpaRepository aRepository) {
        return new ActivityJpaGateway(aRepository);
    }

    @Override
    public void create(final Activity anActivity) {
        final var anActivityEntity = ActivityJpaEntity.from(anActivity);

        try {
            this.activityJpaRepository.save(anActivityEntity);
        } catch (IllegalArgumentException e) {
            throw new PersistenceException(e.getMessage());
        } catch (OptimisticLockingFailureException e) {
            throw new PersistenceException(e.getMessage());
        }
    }

    @Override
    public void delete(final String anId) {
        try {
            this.activityJpaRepository.deleteById(anId);

        } catch (IllegalArgumentException e) {
            throw new PersistenceException(e.getMessage());
        }

    }

    @Override
    public List<Activity> findAll() {
        final var aList = this.activityJpaRepository.findAll();
        return aList.stream()
                .map(activityEntity -> activityEntity.toModel())
                .collect(Collectors.toList());
    }

}
