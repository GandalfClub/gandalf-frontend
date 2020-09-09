import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { AuthRepository } from './auth-repository.service';
import { AuthResponse } from '../models/auth-response';
import {UserDto} from '../models/user-dto';

describe('AuthService', () => {
	let authRepository: AuthRepository;
	let httpMock: HttpTestingController;
	const validResponse: AuthResponse = {
		status: 1,
		user: {
			_id: '1',
			email: 'test@test',
			isAdmin: true,
		},
		logged: true,
		message: 'test',
		isCompetitionActive: false,
	};

  const userDto: UserDto = {
    _id: 'test',
    email: 'test@test',
    isAdmin: false,
  };

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [AuthRepository],
		});
		httpMock = TestBed.inject(HttpTestingController);
		authRepository = TestBed.inject(AuthRepository);
	});
	afterEach(() => {
		httpMock.verify();
	});

	it('should be created', () => {
		expect(authRepository).toBeTruthy();
	});

	describe('signIn', () => {
		it('should return an Observable<AuthResponse>', () => {
			authRepository.signIn('test', 'test').subscribe((response: AuthResponse) => {
				expect(response).toEqual(validResponse);
			});
			const httpRequest: TestRequest = httpMock.expectOne('/api/auth/signin');
			httpRequest.flush(validResponse);
		});
	});

	describe('signInWithGithub', () => {
		it('should return an Observable<AuthResponse>', () => {
			authRepository.signInByGithub('test', 'test').subscribe((response: AuthResponse) => {
				expect(response).toEqual(validResponse);
			});
			const httpRequest: TestRequest = httpMock.expectOne('/api/auth/login');
			httpRequest.flush(validResponse);
		});
	});

	describe('signUp', () => {
		it('should return an Observable<AuthResponse>', () => {
			authRepository.signUp('test', 'test').subscribe((response: AuthResponse) => {
				expect(response).toEqual(validResponse);
			});
			const httpRequest: TestRequest = httpMock.expectOne('/api/auth/signup');
			httpRequest.flush(validResponse);
		});
	});

  describe('LoadUser', () => {
	it('should return an Observable<UserDto>', () => {
		authRepository.loadUser().subscribe((userDtoResponse: UserDto) => {
		expect(userDtoResponse).toEqual(userDto);
		});
		const httpRequest: TestRequest = httpMock.expectOne('/api/users/self');
		httpRequest.flush(userDto);
	});
  });
});
